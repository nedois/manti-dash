import { Group, SimpleGrid, type StackProps, Text } from "@mantine/core"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { MetricsCard } from "@/components/ui/metrics-card"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { ProgressRing } from "@/components/ui/progress-ring"
import { Stack } from "@/components/ui/stack"
import { formatInt, formatPercent } from "@/utilities/number"

const metrics = [
  { title: "Total images", value: 44012, color: "var(--mantine-color-teal-6)", trend: 14.44, percentage: 0.54 },
  { title: "Total videos", value: 440612, color: "var(--mantine-color-red-6)", trend: -18.45, percentage: 0.48 },
  { title: "Total Documents", value: 90875, color: "var(--mantine-color-orange-6)", trend: 20.34, percentage: 0.803 },
  { title: "Total videos", value: 63778, color: "var(--mantine-color-blue-6)", trend: 14.44, percentage: 0.54 },
]

export function MetricsAndProgressRing(props: StackProps) {
  return (
    <MotionViewport>
      <Stack component={motion.div} variants={varFade("inDown")} gap="sm" {...props}>
        <Text>Metrics + Progress Ring</Text>

        <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }}>
          {metrics.map(({ title, value, color, trend, percentage }) => (
            <MetricsCard key={title}>
              <Group justify="space-between" wrap="nowrap">
                <div>
                  <MetricsCard.TextDimmed>{title}</MetricsCard.TextDimmed>
                  <MetricsCard.TextEmphasis mb="xs">{formatInt(value, { suffix: " GB" })}</MetricsCard.TextEmphasis>
                  <MetricsCard.TextDimmed>
                    <MetricsCard.TrendBadge increasing={trend > 0}>{formatPercent(trend / 100)}</MetricsCard.TrendBadge>
                    {" "}
                    last month
                  </MetricsCard.TextDimmed>
                </div>

                <ProgressRing
                  size={92}
                  sections={[{ value: percentage * 100, color }]}
                  label={formatPercent(percentage)}
                />
              </Group>
            </MetricsCard>
          ))}
        </SimpleGrid>
      </Stack>
    </MotionViewport>
  )
}
