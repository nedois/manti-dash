import type { JSX } from "react"
import { Card, type CardProps } from "@mantine/core"
import { MetricsCardMetric, type MetricsCardMetricProps } from "./metrics-card-metric"
import { MetricsCardText, type MetricsCardTextProps } from "./metrics-card-text"
import { MetricsCardTextDimmed, type MetricsCardTextDimmedProps } from "./metrics-card-text-dimmed"
import { MetricsCardTextEmphasis, type MetricsCardTextEmphasisProps } from "./metrics-card-text-emphasis"
import { MetricsCardTrendBadge, type MetricsCardTrendBadgeProps } from "./metrics-card-trend-badge"

export type MetricsCardProps = CardProps

interface MetricsCardComponent {
  (props: MetricsCardProps): JSX.Element
  Text: (props: MetricsCardTextProps) => JSX.Element
  TextEmphasis: (props: MetricsCardTextEmphasisProps) => JSX.Element
  TextDimmed: (props: MetricsCardTextDimmedProps) => JSX.Element
  Metric: (props: MetricsCardMetricProps) => JSX.Element
  TrendBadge: (props: MetricsCardTrendBadgeProps) => JSX.Element
}

export const MetricsCard: MetricsCardComponent = (props) => {
  return <Card {...props} />
}

MetricsCard.Text = MetricsCardText
MetricsCard.TextEmphasis = MetricsCardTextEmphasis
MetricsCard.TextDimmed = MetricsCardTextDimmed
MetricsCard.Metric = MetricsCardMetric
MetricsCard.TrendBadge = MetricsCardTrendBadge
