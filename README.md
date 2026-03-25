# Threatreveal Login UI

Custom login UI for [Zitadel](https://zitadel.com), built with Next.js and deployed to AWS via OpenNext.

## Stack

- [Next.js](https://nextjs.org) — framework
- [tRPC](https://trpc.io) — type-safe API layer
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Framer Motion](https://www.framer.com/motion/) — animations
- [OpenNext](https://opennext.js.org) — AWS deployment adapter

## Development

```bash
bun install
bun dev        # starts on port 3005
```

## CI/CD

### Branch commits

| Job | Trigger | What it does |
|---|---|---|
| `build` | Every branch commit | Builds Docker image tagged with commit SHA, pushes to registry |
| `Trivy_container_scanning` | Every branch commit | Scans the built image for CVEs |

### Semver tags

Tag naming determines the target environment:

| Tag format | Job | Environment |
|---|---|---|
| `vX.Y.Z` | `Build Prod (OpenNext)` | Production |
| `vX.Y.Z-dev.N` | `Build Dev (OpenNext)` | Staging |

Both jobs run `bun build:prod` (OpenNext) and publish the `.open-next/` directory as a CI artifact.

**Examples:**

```bash
git tag v1.2.3        # triggers production build
git tag v1.2.3-dev.1  # triggers staging build
git push --tags
```

> The Docker `build` job is excluded from tag pipelines — only the OpenNext jobs run on tags.
