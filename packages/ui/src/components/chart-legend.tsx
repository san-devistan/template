import {
  type ChartConfig,
  useChart,
} from "@workspace/ui/components/chart-context"
import {
  getConfigKey,
  getPayloadConfigFromPayload,
  getPayloadItemKey,
  getStringProperty,
  type LegendPayloadItem,
} from "@workspace/ui/components/chart-utils"
import { cn } from "@workspace/ui/lib/utils"
import * as React from "react"
import type * as RechartsPrimitive from "recharts"

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> & {
  hideIcon?: boolean
  nameKey?: string
} & RechartsPrimitive.DefaultLegendContentProps) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.flatMap((item) =>
        item.type === "none"
          ? []
          : [
              <ChartLegendItem
                key={getPayloadItemKey(item)}
                config={config}
                hideIcon={hideIcon}
                item={item}
                nameKey={nameKey}
              />,
            ]
      )}
    </div>
  )
}

function ChartLegendItem({
  config,
  hideIcon,
  item,
  nameKey,
}: {
  config: ChartConfig
  hideIcon: boolean
  item: LegendPayloadItem
  nameKey?: string
}) {
  const key = getConfigKey(nameKey, item.dataKey, "value")
  const itemConfig = getPayloadConfigFromPayload(config, item, key)
  const Icon = itemConfig?.icon

  return (
    <div className="flex items-center gap-1.5 [&>svg]:size-3 [&>svg]:text-muted-foreground">
      {Icon && !hideIcon ? (
        <Icon />
      ) : (
        <ChartLegendIcon color={getStringProperty(item, "color")} />
      )}
      {itemConfig?.label}
    </div>
  )
}

function ChartLegendIcon({ color }: { color?: string }) {
  const iconStyle = React.useMemo<React.CSSProperties>(
    () => ({ backgroundColor: color }),
    [color]
  )

  return <div className="size-2 shrink-0 rounded-[2px]" style={iconStyle} />
}

export { ChartLegendContent }
