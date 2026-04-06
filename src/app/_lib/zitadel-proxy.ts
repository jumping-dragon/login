import { type NextRequest, NextResponse } from "next/server";

export async function proxyToZitadel(
	request: NextRequest,
	upstreamPath: string,
): Promise<NextResponse> {
	const zitadelBase = process.env.ZITADEL_API_URL?.replace(/\/$/, "");
	const zitadelUrl = new URL(zitadelBase!);

	const targetUrl = new URL(upstreamPath, zitadelBase);
	targetUrl.search = new URL(request.url).search;

	const headers = new Headers(request.headers);
	headers.set("host", zitadelUrl.host);
	// Rewrite Origin so Zitadel sees its own domain, not the proxy
	headers.set("origin", zitadelUrl.origin);
	// Required for Zitadel instance lookup
	headers.set("x-zitadel-public-host", zitadelUrl.host);
	headers.set("x-zitadel-instance-host", zitadelUrl.host);
	// Strip forwarding headers that would expose localhost to Zitadel
	headers.delete("x-forwarded-host");
	headers.delete("x-forwarded-for");
	headers.delete("x-real-ip");
	headers.delete("referer");

	const response = await fetch(targetUrl.toString(), {
		method: request.method,
		headers,
		body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
		redirect: "manual",
		// @ts-expect-error - Node.js fetch duplex
		duplex: "half",
	});

	const responseHeaders = new Headers(response.headers);

	// If Zitadel redirects (e.g. to the custom login UI), pass it through
	if (response.status >= 300 && response.status < 400) {
		return new NextResponse(null, {
			status: response.status,
			headers: responseHeaders,
		});
	}

	return new NextResponse(response.body, {
		status: response.status,
		headers: responseHeaders,
	});
}
