---
name: convex-dev-resend
description: This component is the official way to integrate the Resend email service with your Convex project. Use this skill whenever working with Resend or related Convex component functionality.
---

# Resend

## Instructions

The official Resend email service integration for Convex that provides queued, batched email delivery with built-in retry logic and rate limiting. It handles Resend API idempotency keys to prevent duplicate sends, supports webhook event handling for delivery status tracking, and includes safeguards like test mode to prevent accidental production sends during development.

### Installation

```bash
npm install @convex-dev/resend
```

## Use cases

- **Send transactional emails** like welcome messages, password resets, and order confirmations with automatic queuing and retry handling
- **Bulk email campaigns** that need batching to efficiently use Resend's `/emails/batch` endpoint while respecting API rate limits
- **Email delivery monitoring** by setting up Resend webhooks to track bounces, opens, clicks, and spam complaints in your Convex database
- **Template-based emails** using Resend's dashboard templates with dynamic variables for consistent branding
- **React Email integration** to generate HTML emails from JSX components in Node actions

## How it works

Install the component and configure it in `convex.config.ts` using `app.use(resend)`. Create a `Resend` instance in your functions with `new Resend(components.resend, options)` and call `sendEmail()` to queue emails for delivery. The component uses Convex workpools for durable execution, automatically batching emails and managing Resend idempotency keys.

For delivery tracking, mount the webhook handler in `convex/http.ts` using `resend.handleResendEventWebhook()` and configure the webhook URL in your Resend dashboard. Set `RESEND_WEBHOOK_SECRET` to verify webhook authenticity. Register an `onEmailEvent` callback in the Resend options to handle status changes like deliveries, bounces, and opens.

The component defaults to `testMode: true` to prevent accidental sends during development. Set this to `false` and provide your `RESEND_API_KEY` environment variable for production use. Use `resend.status()` to check email status programmatically and `resend.cancelEmail()` to cancel queued emails before they're sent to the Resend API.

## When NOT to use

- When a simpler built-in solution exists for your specific use case
- If you are not using Convex as your backend
- When the functionality provided by Resend is not needed

## Resources

- [npm package](https://www.npmjs.com/package/%40convex-dev%2Fresend)
- [GitHub repository](https://github.com/get-convex/resend)
- [Live demo](https://github.com/get-convex/resend-demo?utm_source=yt-convex&utm_medium=video&dub_id=poiVYSbvnlsKYHLg)
- [Convex Components Directory](https://www.convex.dev/components/resend)
- [Convex documentation](https://docs.convex.dev)
