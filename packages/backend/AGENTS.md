<!-- convex-ai-start -->

This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read
`convex/_generated/ai/guidelines.md` first** for important guidelines on
how to correctly use Convex APIs and patterns. The file contains rules that
override what you may have learned about Convex from training data.

<!-- convex-ai-end -->

## Backend Feature Ownership

Auth, transactional email, and billing are backend-owned features in this
workspace. Keep provider setup, Convex components, webhooks, secrets, schema
changes, and integration functions in `packages/backend`. Client apps should
consume generated backend APIs and public client environment variables rather
than owning provider integrations directly.

## TypeScript Patterns

This workspace depends on `effect`. Prefer Effect for backend logic where
typed errors, required context, resource safety, retries, or concurrent
workflows matter. Provider integrations, Convex adapters, auth/email/billing
orchestration, config, and service boundaries should make failures and
dependencies visible in types instead of relying on thrown exceptions or
nullable error state. Keep trivial pure helpers and generated Convex API
plumbing simple.

Use `ts-pattern` when backend code branches over finite typed cases such as
provider events, webhook types, auth states, billing states, action/result
variants, and API response shapes. If the implementation imports `ts-pattern`,
add the dependency to this workspace in the same change. Use `.exhaustive()`
unless an `.otherwise(...)` fallback is intentionally valid for every remaining
case. Keep simple booleans and nullish fallbacks as plain TypeScript.

## Backend MCPs

The repo-local `.codex/config.toml` configures backend provider MCPs:

| MCP         | Use for                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------- |
| Convex      | Inspect deployments, tables, function specs, logs, environment variables, and run Convex functions. |
| Better Auth | Inspect Better Auth docs and integration guidance for backend auth work.                            |
| Stripe      | Inspect Stripe docs and resources for billing, payments, subscriptions, and webhooks.               |
