import { createFileRoute } from "@tanstack/react-router"
import { api } from "@workspace/backend/api"
import { Button } from "@workspace/ui/components/button"
import { Effect } from "effect"
import { DatabaseZapIcon } from "lucide-react"
import { useCallback, useState } from "react"
import { match } from "ts-pattern"
import { useMediaQuery } from "usehooks-ts"

export const Route = createFileRoute("/")({ component: App })

type BackendModuleStatus =
  | { status: "empty" }
  | { status: "ready"; moduleCount: number }

const backendModuleCount = Object.keys(api).length
const backendModuleStatus: BackendModuleStatus =
  backendModuleCount === 0
    ? { status: "empty" }
    : { status: "ready", moduleCount: backendModuleCount }
const backendModuleLabel = match(backendModuleStatus)
  .with({ status: "empty" }, () => "Backend modules: none")
  .with({ status: "ready" }, ({ moduleCount }) => {
    return `Backend modules: ${moduleCount}`
  })
  .exhaustive()

function App() {
  const [count, setCount] = useState(0)
  const isCompactViewport = useMediaQuery("(max-width: 767px)", {
    defaultValue: false,
    initializeWithValue: false,
  })

  const increment = useCallback(() => {
    Effect.runSync(Effect.sync(() => setCount((current) => current + 1)))
  }, [])

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>Effect is installed for this workspace.</p>
          <p>{isCompactViewport ? "Compact viewport" : "Wide viewport"}</p>
          <Button className="mt-2" onClick={increment}>
            Effect count: {count}
          </Button>
          <div className="mt-4 flex items-center gap-2 text-muted-foreground">
            <DatabaseZapIcon className="size-4" aria-hidden="true" />
            <span>{backendModuleLabel}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
