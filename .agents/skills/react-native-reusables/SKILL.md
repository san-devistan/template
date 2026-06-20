---
name: react-native-reusables
description: "Documentation for React Native Reusables from reactnativereusables.com. Use when the user asks about react-native-reusables, React Native Reusables, shadcn/ui for React Native, @react-native-reusables/cli, Nativewind or Uniwind setup, Expo component installation, @rn-primitives, PortalHost, TextClassContext, copied UI components, Clerk authentication blocks, registries, customization, or guides from https://reactnativereusables.com/docs."
---

# React Native Reusables Documentation

> 45 pages from [https://reactnativereusables.com/docs](https://reactnativereusables.com/docs)

This `SKILL.md` is an index, not the full documentation. The actual docs are the linked markdown files in this skill folder.

## Required Lookup

When this skill triggers for a documentation question:

1. Search this skill folder or choose the relevant entry from Contents.
2. Read at least one linked `.md` file before answering API, syntax, configuration, behavior, migration, or troubleshooting questions.
3. Read multiple files when the answer spans setup, copied component code, examples, primitives, styling, portals, authentication blocks, registry setup, or upgrade notes.
4. Treat the local markdown files as the source of truth. If the local docs do not cover the question, say that instead of filling gaps from memory.

## Overview

React Native Reusables is a shadcn-style registry and CLI for copying reusable, customizable UI code into Expo and React Native apps. The docs cover project initialization, adding components, manual Nativewind and Uniwind setup, path aliases, theme tokens, `PortalHost` requirements for native portal-based primitives, and helper patterns like `TextClassContext` and the shared `Icon` wrapper. Component pages include usage snippets, CLI install commands, dependency notes, and copy-paste implementation files. The block docs focus on authentication forms and Clerk-backed variants that can be added through the same CLI workflow.

## Contents

### Getting Started and Project Setup

- [Introduction](index.md)
- [Installation Overview](installation.md)
- [Manual Installation](installation/manual.md)
- [CLI](cli.md)
- [Customization](customization.md)
- [Create Your Own Registry](create-your-own-registry.md)
- [Changelog and Upgrade Notes](changelog.md)

### UI Components

- [Accordion](components/accordion.md)
- [Alert](components/alert.md)
- [Alert Dialog](components/alert-dialog.md)
- [Aspect Ratio](components/aspect-ratio.md)
- [Avatar](components/avatar.md)
- [Badge](components/badge.md)
- [Button](components/button.md)
- [Card](components/card.md)
- [Checkbox](components/checkbox.md)
- [Collapsible](components/collapsible.md)
- [Context Menu](components/context-menu.md)
- [Dialog](components/dialog.md)
- [Dropdown Menu](components/dropdown-menu.md)
- [Hover Card](components/hover-card.md)
- [Input](components/input.md)
- [Label](components/label.md)
- [Menubar](components/menubar.md)
- [Popover](components/popover.md)
- [Progress](components/progress.md)
- [Radio Group](components/radio-group.md)
- [Select](components/select.md)
- [Separator](components/separator.md)
- [Skeleton](components/skeleton.md)
- [Switch](components/switch.md)
- [Tabs](components/tabs.md)
- [Text](components/text.md)
- [Textarea](components/textarea.md)
- [Toggle](components/toggle.md)
- [Toggle Group](components/toggle-group.md)
- [Tooltip](components/tooltip.md)

### Authentication Blocks

- [Authentication Overview](blocks/authentication.md)
- [Forgot Password Form](blocks/authentication/forgot-password-form.md)
- [Reset Password Form](blocks/authentication/reset-password-form.md)
- [Sign In Form](blocks/authentication/sign-in-form.md)
- [Sign Up Form](blocks/authentication/sign-up-form.md)
- [Social Connections](blocks/authentication/social-connections.md)
- [User Menu](blocks/authentication/user-menu.md)
- [Verify Email Form](blocks/authentication/verify-email-form.md)

## Search Hints

- Use the Contents section when the topic maps cleanly to a setup page, component page, or authentication block.
- Use text search inside this skill folder when the topic could appear in many pages, for example `rg -n "<api-or-topic>" .`.
- Prefer files with exact component names, CLI commands, primitive package names, config keys, or error messages.
- For portal, popover, select, dialog, tooltip, dropdown, context menu, hover card, or menubar behavior, read both the target component page and `installation/manual.md` for `PortalHost` setup.
- For styling changes, read `customization.md`, `installation/manual.md`, and the relevant component page before answering.
