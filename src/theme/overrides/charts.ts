import type { MantineThemeOverride } from "@mantine/core"
import { AreaChart, BarChart, LineChart } from "@mantine/charts"

const defaultConfigs = {
  curveType: "natural",
  tickLine: "none",
  gridAxis: "none",
  withXAxis: false,
  withYAxis: false,
  withTooltip: false,
  withDots: false,
  legendProps: {
    verticalAlign: "bottom",
  },
  dotProps: {
    r: 3,
    strokeWidth: 2,
    fill: "var(--mantine-color-body)",
  },
} as const

export default {
  BarChart: BarChart.extend({
    defaultProps: {
      barProps: {
        isAnimationActive: true,
        radius: 8,
      },
    },
  }),
  LineChart: LineChart.extend({
    defaultProps: {
      ...defaultConfigs,
      lineProps: {
        isAnimationActive: true,
      },
    },
  }),
  AreaChart: AreaChart.extend({
    defaultProps: {
      ...defaultConfigs,
      areaProps: {
        isAnimationActive: true,
      },
    },
  }),
} as MantineThemeOverride["components"]
