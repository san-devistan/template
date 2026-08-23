import { cva } from "class-variance-authority"

const inputGroupAddonVariants = cva(
  "gap-2 py-1.5 text-sm font-medium [&>svg:not([class*='size-'])]:size-4 flex h-auto cursor-text items-center justify-center text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)]",
  {
    variants: {
      align: {
        "inline-start":
          "pl-2 has-[>button]:-ml-1 order-first has-[>kbd]:ml-[-0.15rem]",
        "inline-end":
          "pr-2 has-[>button]:-mr-1 order-last has-[>kbd]:mr-[-0.15rem]",
        "block-start":
          "px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2 order-first w-full justify-start",
        "block-end":
          "px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2 order-last w-full justify-start",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

const inputGroupButtonVariants = cva(
  "gap-2 text-sm flex items-center shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-1.5 [&>svg:not([class*='size-'])]:size-3.5 rounded-[calc(var(--radius)-5px)]",
        sm: "",
        "icon-xs":
          "size-6 p-0 has-[>svg]:p-0 rounded-[calc(var(--radius)-5px)]",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

export { inputGroupAddonVariants, inputGroupButtonVariants }
