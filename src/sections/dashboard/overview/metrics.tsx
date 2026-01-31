import { SimpleGrid, Stack, ThemeIcon } from "@mantine/core"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { Icon } from "@/components/ui/icon"
import { MetricsCard } from "@/components/ui/metrics-card"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { formatCurrency, formatInt, formatPercent } from "@/utilities/number"

const metrics = [
  {
    title: "Total Revenue",
    icon: "lucide:dollar-sign",
    color: "primary",
    trend: 0.201,
    value: formatCurrency(45231.89),
  },
  {
    title: "Total Subscriptions",
    icon: "lucide:users",
    color: "teal",
    trend: 1.801,
    value: formatInt(2350, { prefix: "+" }),
  },
  {
    title: "Sales",
    icon: "lucide:shopping-cart",
    color: "orange",
    trend: 0.19,
    value: formatInt(12234, { prefix: "+" }),
  },
  {
    title: "Active Now",
    icon: "lucide:trending-up",
    color: "orange",
    trend: -0.024,
    value: formatInt(573, { prefix: "+" }),
  },
]

export function Metrics() {
  return (
    <MotionViewport>
      <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }}>
        {metrics.map((metric, index) => (
          <motion.div key={metric.title} variants={varFade("inUp")} transition={{ delay: 0.1 * index }}>
            <MetricsCard>
              <Stack gap="xs">
                <ThemeIcon variant="light" size="xl" color={metric.color}>
                  <Icon icon={metric.icon} height="50%" />
                </ThemeIcon>
                <MetricsCard.TextDimmed>{metric.title}</MetricsCard.TextDimmed>
                <MetricsCard.Metric>{metric.value}</MetricsCard.Metric>
                <MetricsCard.TextDimmed>
                  <MetricsCard.TrendBadge increasing={metric.trend > 0}>
                    {formatPercent(metric.trend, { maximumFractionDigits: 1 })}
                  </MetricsCard.TrendBadge>
                  {" "}
                  from last month
                </MetricsCard.TextDimmed>
              </Stack>
            </MetricsCard>
          </motion.div>
        ))}
      </SimpleGrid>
    </MotionViewport>
  )
}
