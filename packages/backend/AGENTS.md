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

Backend-local skills live in `packages/backend/.agents/skills/<skill>/SKILL.md`.
Read only the narrow skill files needed for the task:

### Effect

| Skill       | Invoke when                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `effect-ts` | Nontrivial backend Effect work: typed failures, service/layer dependencies, schemas, config, retries, resources, concurrency, or tracing |

This workspace depends on `effect`. Prefer Effect for backend logic where
typed errors, required context, resource safety, retries, or concurrent
workflows matter. Provider integrations, Convex adapters, auth/email/billing
orchestration, config, and service boundaries should make failures and
dependencies visible in types instead of relying on thrown exceptions or
nullable error state. Keep trivial pure helpers and generated Convex API
plumbing simple.

### ts-pattern

| Skill        | Invoke when                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `ts-pattern` | Exhaustive pattern matching for discriminated unions, Convex/API result variants, auth/email/billing states, webhook events, or actions |

Use the local `ts-pattern` skill when backend code branches over finite typed
cases such as provider events, webhook types, auth states, billing states,
action/result variants, and API response shapes. If the implementation imports
`ts-pattern`, add the dependency to this workspace in the same change. Use
`.exhaustive()` unless an `.otherwise(...)` fallback is intentionally valid for
every remaining case. Keep simple booleans and nullish fallbacks as plain
TypeScript.

### Convex

| Skill                      | Invoke when                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------ |
| `convex`                   | General or underspecified Convex work, or choosing which Convex skill should handle a backend task     |
| `convex-quickstart`        | Creating or adding Convex to an app, frontend provider setup, env vars, or first `npx convex dev` run  |
| `convex-setup-auth`        | Convex auth setup, auth providers, identity mapping, users tables, protected functions, roles, or ACLs |
| `convex-create-component`  | Reusable Convex components, isolated tables, backend modules, integrations, or component boundaries    |
| `convex-migration-helper`  | Breaking schema changes, backfills, table reshaping, required fields, field type changes, or rollouts  |
| `convex-performance-audit` | Slow Convex features, insights findings, high reads/bytes, subscriptions, OCC conflicts, or limits     |

### Auth

| Skill                                      | Invoke when                                                                                               |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `convex-dev-better-auth`                   | Better Auth with Convex or related Convex component functionality                                         |
| `better-auth-best-practices`               | Better Auth server/client config, adapters, sessions, plugins, env vars, email/password, OAuth, auth.ts   |
| `better-auth-security-best-practices`      | Rate limits, auth secrets, CSRF, trusted origins, secure cookies/sessions, OAuth token encryption, audits |
| `email-and-password-best-practices`        | Email verification, password reset, password policy, hashing, sign-in, sign-up, or credential auth        |
| `two-factor-authentication-best-practices` | TOTP, OTP, backup codes, trusted devices, MFA setup, authenticator apps, or Better Auth twoFactor plugin  |
| `organization-best-practices`              | Better Auth organizations, teams, invitations, members, roles, permissions, multi-tenancy, or RBAC        |
| `create-auth-skill`                        | Scaffolding Better Auth into a TypeScript/JavaScript app with framework detection and auth UI             |

### Email And Resend

| Skill                  | Invoke when                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| `convex-dev-resend`    | Resend with Convex or related Convex component functionality                                             |
| `resend`               | Resend API work: sending, receiving, webhooks, templates, domains, contacts, broadcasts, logs, SDK setup |
| `resend-cli`           | Running `resend` CLI commands in shell, scripts, or CI; sending/previewing React Email templates         |
| `react-email`          | React Email templates, rendering HTML emails, visual email editor, transactional email components        |
| `email-best-practices` | Deliverability, SPF/DKIM/DMARC, spam/bounce issues, compliance, accessibility, webhooks, retry logic     |
| `agent-email-inbox`    | Inbound email that triggers actions, AI inboxes, support handlers, email-to-task, or untrusted content   |

### Stripe

| Skill                   | Invoke when                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `convex-dev-stripe`     | Stripe payments, subscriptions, or billing integrated into Convex                                        |
| `stripe-best-practices` | Stripe API choices, Checkout, PaymentIntents, Billing, subscriptions, Connect, webhooks, or security     |
| `upgrade-stripe`        | Upgrading Stripe API versions or Stripe SDKs                                                             |
| `stripe-directory`      | Finding vendors, tools, service providers, partners, or purchasable services via Stripe Directory        |
| `stripe-projects`       | Provisioning third-party infrastructure/services, browsing project catalogs, or getting service env vars |

## Backend MCPs

The repo-local `.codex/config.toml` configures backend provider MCPs:

| MCP         | Use for                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------- |
| Convex      | Inspect deployments, tables, function specs, logs, environment variables, and run Convex functions. |
| Better Auth | Inspect Better Auth docs and integration guidance for backend auth work.                            |
| Stripe      | Inspect Stripe docs and resources for billing, payments, subscriptions, and webhooks.               |
