import { NextResponse } from "next/server";

/**
 * Healthcheck endpoint for load balancers, Kubernetes, and container orchestration.
 * Returns 200 when the service is running and ready to accept traffic.
 */
export function GET() {
  return NextResponse.json({ status: "ok" });
}
