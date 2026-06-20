import {
  THEMES,
  type ChartConfig,
} from "@workspace/ui/components/chart-context"
import * as React from "react"

const themeEntries: Array<[keyof typeof THEMES, string]> = [
  ["light", THEMES.light],
  ["dark", THEMES.dark],
]

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const colorConfig = React.useMemo(
    () =>
      Object.entries(config).filter(
        ([, itemConfig]) => itemConfig.theme ?? itemConfig.color
      ),
    [config]
  )
  const cssText = React.useMemo(
    () => getChartCssText(id, colorConfig),
    [colorConfig, id]
  )

  if (!colorConfig.length) {
    return null
  }

  return <style>{cssText}</style>
}

function getChartCssText(
  id: string,
  colorConfig: Array<[string, ChartConfig[string]]>
) {
  return themeEntries
    .map(
      ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme] ?? itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .filter(Boolean)
  .join("\n")}
}
`
    )
    .join("\n")
}

export { ChartStyle }
