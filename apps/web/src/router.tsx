import { ConvexQueryClient } from "@convex-dev/react-query"
import { QueryClient } from "@tanstack/react-query"
import { createRouter as createTanStackRouter } from "@tanstack/react-router"
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query"
import { ConvexProvider } from "convex/react"
import type { ReactNode } from "react"

import { routeTree } from "./routeTree.gen"

let didWarnMissingConvexUrl = false

function warnMissingConvexUrl() {
  if (didWarnMissingConvexUrl) {
    return
  }

  didWarnMissingConvexUrl = true
  console.warn(
    "VITE_CONVEX_URL is not set. Convex is disabled for apps/web; set it when this app needs the Convex backend."
  )
}

export function getRouter() {
  const convexUrl = import.meta.env.VITE_CONVEX_URL
  const convexQueryClient = convexUrl ? new ConvexQueryClient(convexUrl) : null

  if (!convexQueryClient) {
    warnMissingConvexUrl()
  }

  const queryClient = new QueryClient(
    convexQueryClient
      ? {
          defaultOptions: {
            queries: {
              queryKeyHashFn: convexQueryClient.hashFn(),
              queryFn: convexQueryClient.queryFn(),
            },
          },
        }
      : undefined
  )

  convexQueryClient?.connect(queryClient)

  function ConvexProviderWrapper({ children }: { children: ReactNode }) {
    if (!convexQueryClient) {
      return <>{children}</>
    }

    return (
      <ConvexProvider client={convexQueryClient.convexClient}>
        {children}
      </ConvexProvider>
    )
  }

  const router = createTanStackRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    Wrap: ConvexProviderWrapper,
  })

  setupRouterSsrQueryIntegration({ router, queryClient })

  return router
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
