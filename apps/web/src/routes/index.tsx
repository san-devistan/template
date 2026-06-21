import { createFileRoute } from "@tanstack/react-router"
import { api } from "@workspace/backend/api"
import { Button } from "@workspace/ui/components/button"
import { Effect } from "effect"
import { DatabaseZapIcon } from "lucide-react"
import { useCallback, useState } from "react"

export const Route = createFileRoute("/")({ component: App })

const backendModuleCount = Object.keys(api).length

function App() {
  const [count, setCount] = useState(0)

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
          <Button className="mt-2" onClick={increment}>
            Effect count: {count}
          </Button>
          <div className="mt-4 flex items-center gap-2 text-muted-foreground">
            <DatabaseZapIcon className="size-4" aria-hidden="true" />
            <span>Backend modules: {backendModuleCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
