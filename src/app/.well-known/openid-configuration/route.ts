import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const zitadelBase = process.env.ZITADEL_API_URL?.replace(/\/$/, "");
  const proxyBase = new URL(request.url).origin;

  const zitadelUrl = new URL(zitadelBase!);
  const discovery = await fetch(
    `${zitadelBase}/.well-known/openid-configuration`,
    {
      headers: {
        host: zitadelUrl.host,
        origin: zitadelUrl.origin,
      },
    },
  ).then((r) => r.json());

  // Rewrite endpoint URLs to go through this proxy.
  // Keep `issuer` as the real Zitadel URL so JWT `iss` validation passes.
  const rewrite = (url: string) =>
    typeof url === "string" ? url.replace(zitadelBase!, proxyBase) : url;

  const rewritten = Object.fromEntries(
    Object.entries(discovery as Record<string, unknown>).map(([k, v]) => [
      k,
      k === "issuer" ? v : rewrite(v as string),
    ]),
  );

  return NextResponse.json(rewritten);
}
