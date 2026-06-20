"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import type { CSSProperties } from "react"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const toasterIcons = {
  success: <CircleCheckIcon className="size-4" />,
  info: <InfoIcon className="size-4" />,
  warning: <TriangleAlertIcon className="size-4" />,
  error: <OctagonXIcon className="size-4" />,
  loading: <Loader2Icon className="size-4 animate-spin" />,
}

const toasterStyle = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)",
  "--border-radius": "var(--radius)",
} satisfies CSSProperties

const toastOptions = {
  classNames: {
    toast: "cn-toast",
  },
} satisfies ToasterProps["toastOptions"]

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={toToasterTheme(theme)}
      className="toaster group"
      icons={toasterIcons}
      style={toasterStyle}
      toastOptions={toastOptions}
      {...props}
    />
  )
}

function toToasterTheme(theme: string | undefined): ToasterProps["theme"] {
  if (theme === "light" || theme === "dark" || theme === "system") {
    return theme
  }

  return "system"
}

export { Toaster }
