import { type NextRequest } from "next/server";
import { proxyToZitadel } from "~/app/_lib/zitadel-proxy";

async function handler(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  return proxyToZitadel(request, `/oauth/v2/${path.join("/")}`);
}

export const GET = handler;
export const POST = handler;
