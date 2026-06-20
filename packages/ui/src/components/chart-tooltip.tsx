import {
  type ChartConfig,
  useChart,
} from "@workspace/ui/components/chart-context"
import {
  getConfigKey,
  getPayloadConfigFromPayload,
  getPayloadItemKey,
  getStringProperty,
  type TooltipFormatter,
  type TooltipLabelFormatter,
  type TooltipNameType,
  type TooltipPayloadItem,
} from "@workspace/ui/components/chart-utils"
import { cn } from "@workspace/ui/lib/utils"
import * as React from "react"
import type { TooltipValueType } from "recharts"
import type * as RechartsPrimitive from "recharts"

type Indicator = "line" | "dot" | "dashed"
type ChartIndicatorStyle = React.CSSProperties & {
  "--color-bg"?: string
  "--color-border"?: string
}

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: Indicator
    nameKey?: string
    labelKey?: string
  } & Omit<
    RechartsPrimitive.DefaultTooltipContentProps<
      TooltipValueType,
      TooltipNameType
    >,
    "accessibilityLayer"
  >) {
  const { config } = useChart()
  const tooltipLabel = useTooltipLabel({
    config,
    hideLabel,
    label,
    labelClassName,
    labelFormatter,
    labelKey,
    payload,
  })

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"
  const visiblePayload = payload.filter((item) => item.type !== "none")

  return (
    <div
      className={cn(
        "grid min-w-32 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {visiblePayload.map((item, itemIndex) => (
          <ChartTooltipItem
            key={getPayloadItemKey(item)}
            color={color}
            config={config}
            formatter={formatter}
            hideIndicator={hideIndicator}
            indicator={indicator}
            item={item}
            itemIndex={itemIndex}
            nameKey={nameKey}
            nestLabel={nestLabel}
            tooltipLabel={tooltipLabel}
          />
        ))}
      </div>
    </div>
  )
}

function ChartTooltipItem({
  color,
  config,
  formatter,
  hideIndicator,
  indicator,
  item,
  itemIndex,
  nameKey,
  nestLabel,
  tooltipLabel,
}: {
  color?: string
  config: ChartConfig
  formatter?: TooltipFormatter
  hideIndicator: boolean
  indicator: Indicator
  item: TooltipPayloadItem
  itemIndex: number
  nameKey?: string
  nestLabel: boolean
  tooltipLabel: React.ReactNode
}) {
  const key = getConfigKey(nameKey, item.name, item.dataKey, "value")
  const itemConfig = getPayloadConfigFromPayload(config, item, key)
  const indicatorColor =
    color ?? getStringProperty(item.payload, "fill") ?? item.color

  return (
    <div
      className={cn(
        "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
        indicator === "dot" && "items-center"
      )}
    >
      {formatter && item.value !== undefined && item.name ? (
        formatter(item.value, item.name, item, itemIndex, item.payload)
      ) : (
        <ChartTooltipDefaultItem
          indicatorColor={indicatorColor}
          hideIndicator={hideIndicator}
          indicator={indicator}
          item={item}
          itemConfig={itemConfig}
          nestLabel={nestLabel}
          tooltipLabel={tooltipLabel}
        />
      )}
    </div>
  )
}

function ChartTooltipDefaultItem({
  hideIndicator,
  indicator,
  indicatorColor,
  item,
  itemConfig,
  nestLabel,
  tooltipLabel,
}: {
  hideIndicator: boolean
  indicator: Indicator
  indicatorColor?: string
  item: TooltipPayloadItem
  itemConfig?: ChartConfig[string]
  nestLabel: boolean
  tooltipLabel: React.ReactNode
}) {
  const Icon = itemConfig?.icon

  return (
    <>
      {Icon ? (
        <Icon />
      ) : (
        !hideIndicator && (
          <ChartTooltipIndicator
            color={indicatorColor}
            indicator={indicator}
            nestLabel={nestLabel}
          />
        )
      )}
      <div
        className={cn(
          "flex flex-1 justify-between leading-none",
          nestLabel ? "items-end" : "items-center"
        )}
      >
        <div className="grid gap-1.5">
          {nestLabel ? tooltipLabel : null}
          <span className="text-muted-foreground">
            {itemConfig?.label ?? item.name}
          </span>
        </div>
        {item.value != null && (
          <span className="font-mono font-medium text-foreground tabular-nums">
            {typeof item.value === "number"
              ? item.value.toLocaleString()
              : String(item.value)}
          </span>
        )}
      </div>
    </>
  )
}

function ChartTooltipIndicator({
  color,
  indicator,
  nestLabel,
}: {
  color?: string
  indicator: Indicator
  nestLabel: boolean
}) {
  const indicatorStyle = React.useMemo<ChartIndicatorStyle>(
    () => ({
      "--color-bg": color,
      "--color-border": color,
    }),
    [color]
  )

  return (
    <div
      className={cn(
        "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
        {
          "size-2.5": indicator === "dot",
          "w-1": indicator === "line",
          "w-0 border-[1.5px] border-dashed bg-transparent":
            indicator === "dashed",
          "my-0.5": nestLabel && indicator === "dashed",
        }
      )}
      style={indicatorStyle}
    />
  )
}

function useTooltipLabel({
  config,
  hideLabel,
  label,
  labelClassName,
  labelFormatter,
  labelKey,
  payload,
}: {
  config: ChartConfig
  hideLabel: boolean
  label?: React.ReactNode
  labelClassName?: string
  labelFormatter?: TooltipLabelFormatter
  labelKey?: string
  payload?: ReadonlyArray<TooltipPayloadItem>
}) {
  return React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = getConfigKey(labelKey, item.dataKey, item.name, "value")
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? (config[label].label ?? label)
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>
  }, [
    config,
    hideLabel,
    label,
    labelClassName,
    labelFormatter,
    labelKey,
    payload,
  ])
}

export { ChartTooltipContent }
