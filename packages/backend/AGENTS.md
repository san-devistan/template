<!-- convex-ai-start -->

This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read
`convex/_generated/ai/guidelines.md` first** for important guidelines on
how to correctly use Convex APIs and patterns. The file contains rules that
override what you may have learned about Convex from training data.

<!-- convex-ai-end -->

## Role

This is where the app's data and business logic live. Apps call the generated
API from `@workspace/backend`; anything beyond presentation belongs here.

## Providers

External providers are added as Convex components:

- Auth: [Better Auth](https://www.convex.dev/components/better-auth) (MCP)
- Payments: [Stripe](https://www.convex.dev/components/stripe) (MCP, CLI)
- Email: [Resend](https://www.convex.dev/components/resend)

Convex itself is reachable through its MCP and the workspace CLI
(`pnpm exec convex`).
