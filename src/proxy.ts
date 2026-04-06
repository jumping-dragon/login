import { getServiceUrlFromHeaders } from "lib/service-url";
import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { DEFAULT_CSP } from "../constants/csp";

export const config = {
	matcher: [
		// Exclude openid-configuration — handled by route handler which rewrites endpoint URLs
		"/.well-known/((?!openid-configuration).*)",
		// /oauth and /oidc handled by route handlers to avoid x-middleware-rewrite exposing Zitadel URL
		"/idps/callback/:path*",
		"/saml/:path*",
	],
};

export async function proxy(request: NextRequest) {
	// escape proxy if the environment is setup for multitenancy
	if (!process.env.ZITADEL_API_URL || !process.env.ZITADEL_SERVICE_USER_TOKEN) {
		return NextResponse.next();
	}

	const _headers = await headers();

	const { serviceUrl } = getServiceUrlFromHeaders(_headers);

	// Call the /security route handler
	// TODO check this on cloud run deployment
	const securityResponse = await fetch(`${request.nextUrl.origin}/security`);

	if (!securityResponse.ok) {
		console.error(
			"Failed to fetch security settings:",
			securityResponse.statusText,
		);
		return NextResponse.next(); // Fallback if the request fails
	}

	const { settings: securitySettings } = await securityResponse.json();

	const instanceHost = `${serviceUrl}`
		.replace("https://", "")
		.replace("http://", "")
		.replace(/\/$/, "");

	const requestHeaders = new Headers(request.headers);

	// this is a workaround for the next.js server not forwarding the host header
	// requestHeaders.set("x-zitadel-forwarded", `host="${request.nextUrl.host}"`);
	requestHeaders.set("x-zitadel-public-host", instanceHost);

	// this is a workaround for the next.js server not forwarding the host header
	requestHeaders.set("x-zitadel-instance-host", instanceHost);

	const responseHeaders = new Headers();
	responseHeaders.set("Access-Control-Allow-Origin", "*");
	responseHeaders.set("Access-Control-Allow-Headers", "*");

	if (securitySettings?.embeddedIframe?.enabled) {
		securitySettings.embeddedIframe.allowedOrigins;
		responseHeaders.set(
			"Content-Security-Policy",
			`${DEFAULT_CSP} frame-ancestors ${securitySettings.embeddedIframe.allowedOrigins.join(" ")};`,
		);
		responseHeaders.delete("X-Frame-Options");
	}

	request.nextUrl.href = `${serviceUrl}${request.nextUrl.pathname}${request.nextUrl.search}`;

	return NextResponse.rewrite(request.nextUrl, {
		request: {
			headers: requestHeaders,
		},
		headers: responseHeaders,
	});
}
