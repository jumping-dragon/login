# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:alpine AS base
WORKDIR /app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Skip environment validation during build (useful for Docker builds)
# Environment variables will be validated and set at runtime instead
# ENV SKIP_ENV_VALIDATION=true

# By default, next public environment must be given as build argument
ARG NEXT_PUBLIC_ENV

ENV SKIP_ENV_VALIDATION=true

RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=prerelease /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=prerelease --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=prerelease --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
# set hostname to localhost
ENV HOSTNAME="0.0.0.0"

# Runtime environment variables (can be overridden when running the container)
# API_ENDPOINT: Server-side only, can be changed at runtime
# NEXT_PUBLIC_ENV: Client-side (baked into build), must match build-time value
# Example: docker run -e API_ENDPOINT=https://api.example.com -e NEXT_PUBLIC_ENV=production <image>

# Healthcheck for container orchestration (Kubernetes, Docker Swarm, etc.)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
