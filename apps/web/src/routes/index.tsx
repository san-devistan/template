import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@workspace/ui/components/button"
import { Effect } from "effect"
import { useCallback, useState } from "react"

export const Route = createFileRoute("/")({ component: App })

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
        </div>
      </div>
    </div>
  )
}
