"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react"
import { useTheme } from "next-themes"
import type * as React from "react"
import { Toaster as Sonner, type ToasterProps } from "sonner"

type ToasterStyle = React.CSSProperties & {
  "--normal-bg": string
  "--normal-text": string
  "--normal-border": string
  "--border-radius": string
}

const toasterIcons: ToasterProps["icons"] = {
  success: <CircleCheckIcon className="size-4" />,
  info: <InfoIcon className="size-4" />,
  warning: <TriangleAlertIcon className="size-4" />,
  error: <OctagonXIcon className="size-4" />,
  loading: <Loader2Icon className="size-4 animate-spin" />,
}

const toasterStyle: ToasterStyle = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)",
  "--border-radius": "var(--radius)",
}

const toastOptions: ToasterProps["toastOptions"] = {
  classNames: {
    toast: "cn-toast",
  },
}

function getToasterTheme(theme: string | undefined): ToasterProps["theme"] {
  if (theme === "dark" || theme === "light" || theme === "system") {
    return theme
  }

  return "system"
}

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={getToasterTheme(theme)}
      className="toaster group"
      icons={toasterIcons}
      style={toasterStyle}
      toastOptions={toastOptions}
      {...props}
    />
  )
}

export { Toaster }
