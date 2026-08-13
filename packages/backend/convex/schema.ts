import { defineSchema } from "convex/server"
import { match } from "ts-pattern"

const schemaMode = { status: "empty" } as const

export default defineSchema(
  match(schemaMode)
    .with({ status: "empty" }, () => ({}))
    .exhaustive()
)
