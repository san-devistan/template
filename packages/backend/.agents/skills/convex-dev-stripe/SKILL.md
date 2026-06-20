---
name: convex-dev-stripe
description: Integrates Stripe payments, subscriptions, and billing into your Convex application. Use this skill whenever working with Stripe or related Convex component functionality.
---

# Stripe

## Instructions

A Convex component that handles the complete Stripe integration lifecycle including checkout sessions, subscription management, customer billing portals, and webhook synchronization. It automatically creates and manages customers, processes payments and subscriptions, and keeps Stripe data synchronized with your Convex database through webhook handlers. The component provides both a StripeSubscriptions client API and direct database queries for real-time payment data.

### Installation

```bash
npm install @convex-dev/stripe
```

## Use cases

• **SaaS subscription billing** - Implement recurring billing with seat-based pricing, subscription upgrades/downgrades, and automatic customer portal access for plan management
• **One-time payment processing** - Handle product purchases, service fees, or donations with Stripe Checkout integration and payment status tracking
• **Team billing management** - Link subscriptions to organizations with quantity-based pricing, allowing teams to add or remove seats dynamically
• **Customer self-service billing** - Generate Customer Portal sessions so users can update payment methods, download invoices, and manage their billing without support
• **Multi-tenant payment tracking** - Query payments, subscriptions, and invoices in real-time across users and organizations with automatic webhook synchronization

## How it works

The component uses a StripeSubscriptions client that wraps Stripe API calls within Convex actions, handling customer creation, checkout sessions, and subscription management. You configure it by adding the component to your convex.config.ts and setting up webhook routes in http.ts that point to the component's webhook handler at /stripe/webhook.

Webhook events automatically synchronize Stripe data to dedicated Convex tables (customers, subscriptions, payments, invoices) in the component's namespace. The component handles 10+ webhook events including checkout.session.completed, customer.subscription.updated, and payment_intent.succeeded, maintaining real-time data consistency.

You access payment data through the component's public queries like listSubscriptionsByUserId and getPayment, or use the client methods like createCheckoutSession and updateSubscriptionQuantity in your actions. The component supports linking payments to both individual users and organizations through metadata, enabling flexible billing models.

## When NOT to use

- When a simpler built-in solution exists for your specific use case
- If you are not using Convex as your backend
- When the functionality provided by Stripe is not needed

## Resources

- [npm package](https://www.npmjs.com/package/%40convex-dev%2Fstripe)
- [GitHub repository](https://github.com/get-convex/stripe)
- [Live demo](https://stripe-component.vercel.app/)
- [Convex Components Directory](https://www.convex.dev/components/stripe)
- [Convex documentation](https://docs.convex.dev)
