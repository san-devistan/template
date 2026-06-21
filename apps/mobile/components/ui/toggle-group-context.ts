import type { toggleVariants } from "@/components/ui/toggle-variants"
import type { VariantProps } from "class-variance-authority"
import * as React from "react"

type ToggleGroupVariantProps = VariantProps<typeof toggleVariants>

const ToggleGroupPresenceContext = React.createContext(false)
const ToggleGroupVariantContext =
  React.createContext<ToggleGroupVariantProps["variant"]>(undefined)
const ToggleGroupSizeContext =
  React.createContext<ToggleGroupVariantProps["size"]>(undefined)

function useToggleGroupContext(): ToggleGroupVariantProps {
  if (!React.use(ToggleGroupPresenceContext)) {
    throw new Error(
      "ToggleGroup compound components cannot be rendered outside the ToggleGroup component"
    )
  }

  return {
    size: React.use(ToggleGroupSizeContext),
    variant: React.use(ToggleGroupVariantContext),
  }
}

export {
  ToggleGroupPresenceContext,
  ToggleGroupSizeContext,
  ToggleGroupVariantContext,
  useToggleGroupContext,
}
export type { ToggleGroupVariantProps }
