<!-- convex-ai-start -->

This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read
`convex/_generated/ai/guidelines.md` first** for important guidelines on
how to correctly use Convex APIs and patterns. The file contains rules that
override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running
`npx convex ai-files install`.

<!-- convex-ai-end -->

## Backend Feature Ownership

Auth, transactional email, and billing are backend-owned features in this
workspace. Keep provider setup, Convex components, webhooks, secrets, schema
changes, and integration functions in `packages/backend`. Client apps should
consume generated backend APIs and public client environment variables rather
than owning provider integrations directly.

## Backend Skills

Read only the skill files needed for the task:

| Work type                       | Skills                                                                                                                 |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Convex setup and patterns       | `packages/backend/.agents/skills/convex/SKILL.md`, `convex-quickstart`, `convex-create-component`, `convex-setup-auth` |
| Better Auth with Convex         | `packages/backend/.agents/skills/convex-dev-better-auth/SKILL.md`, plus the backend-local Better Auth skills as needed |
| Resend email with Convex        | `packages/backend/.agents/skills/convex-dev-resend/SKILL.md`, plus `resend` for provider/API behavior                  |
| Resend CLI and provider ops     | `resend-cli`, `resend`                                                                                                 |
| Email templates and rendering   | `react-email`, `email-best-practices`, `resend`                                                                        |
| Deliverability and compliance   | `email-best-practices`, `resend`                                                                                       |
| Inbound or action-trigger email | `agent-email-inbox`, `resend`                                                                                          |
| Stripe billing with Convex      | `packages/backend/.agents/skills/convex-dev-stripe/SKILL.md`, plus the backend-local Stripe skills as needed           |
| Performance and migrations      | `convex-performance-audit`, `convex-migration-helper`                                                                  |

## Backend MCPs

The repo-local `.codex/config.toml` configures backend provider MCPs:

| MCP         | Use for                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------- |
| Convex      | Inspect deployments, tables, function specs, logs, environment variables, and run Convex functions. |
| Better Auth | Inspect Better Auth docs and integration guidance for backend auth work.                            |
| Resend      | Inspect Resend email provider docs and resources for transactional email work.                      |
| Stripe      | Inspect Stripe docs and resources for billing, payments, subscriptions, and webhooks.               |
