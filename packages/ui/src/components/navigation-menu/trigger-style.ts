import { cva } from "class-variance-authority"

const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger h-9 px-4 py-2 text-sm font-medium inline-flex w-max items-center justify-center rounded-md transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted"
)

export { navigationMenuTriggerStyle }
