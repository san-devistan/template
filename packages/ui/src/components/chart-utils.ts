import type { ChartConfig } from "@workspace/ui/components/chart-context"
import type * as RechartsPrimitive from "recharts"
import type { TooltipValueType } from "recharts"

export type TooltipNameType = number | string
export type TooltipPayloadItem = NonNullable<
  RechartsPrimitive.DefaultTooltipContentProps<
    TooltipValueType,
    TooltipNameType
  >["payload"]
>[number]
export type LegendPayloadItem = NonNullable<
  RechartsPrimitive.DefaultLegendContentProps["payload"]
>[number]
export type TooltipFormatter = RechartsPrimitive.DefaultTooltipContentProps<
  TooltipValueType,
  TooltipNameType
>["formatter"]
export type TooltipLabelFormatter =
  RechartsPrimitive.DefaultTooltipContentProps<
    TooltipValueType,
    TooltipNameType
  >["labelFormatter"]

function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (!isRecord(payload)) {
    return undefined
  }

  const payloadPayload = getRecordProperty(payload, "payload")
  const configLabelKey =
    getStringProperty(payload, key) ??
    getStringProperty(payloadPayload, key) ??
    key

  return configLabelKey in config ? config[configLabelKey] : config[key]
}

function getPayloadItemKey(payload: unknown) {
  if (!isRecord(payload)) {
    return "item"
  }

  return getConfigKey(
    getRecordProperty(payload, "dataKey"),
    getRecordProperty(payload, "name"),
    getRecordProperty(payload, "value"),
    getRecordProperty(payload, "color"),
    "item"
  )
}

function getConfigKey(...values: Array<unknown>) {
  for (const value of values) {
    if (typeof value === "string" || typeof value === "number") {
      return String(value)
    }
  }

  return "value"
}

function getStringProperty(source: unknown, key: string) {
  const value = getRecordProperty(source, key)

  return typeof value === "string" ? value : undefined
}

function getRecordProperty(source: unknown, key: string) {
  if (!isRecord(source)) {
    return undefined
  }

  const value: unknown = Reflect.get(source, key)

  return value
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

export {
  getConfigKey,
  getPayloadConfigFromPayload,
  getPayloadItemKey,
  getStringProperty,
}
