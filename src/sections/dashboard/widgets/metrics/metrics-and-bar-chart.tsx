import { BarChart } from "@mantine/charts"
import { Group, SimpleGrid, type StackProps, Text } from "@mantine/core"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { MetricsCard } from "@/components/ui/metrics-card"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { Stack } from "@/components/ui/stack"
import { formatNumber } from "@/utilities/number"

const data = [
  { month: "January", smartphones: 1200, laptops: 900, tablets: 200, watches: 85 },
  { month: "February", smartphones: 1900, laptops: 1200, tablets: 400, watches: 96 },
  { month: "March", smartphones: 400, laptops: 1000, tablets: 200, watches: 75 },
  { month: "April", smartphones: 1000, laptops: 200, tablets: 800, watches: 41 },
  { month: "May", smartphones: 800, laptops: 1400, tablets: 1200, watches: 85 },
  { month: "June", smartphones: 750, laptops: 600, tablets: 1000, watches: 120 },
]

const metrics = [
  {
    id: "smartphones",
    title: "Smartphone sells",
    description: "Number of smartphones selled this year.",
    value: 1.4,
    color: "blue.6",
  },
  {
    id: "laptops",
    description: "Number of laptops selled this year.",
    title: "Laptop sells",
    value: 92.6,
    color: "var(--mantine-color-teal-6)",
  },
  {
    id: "tablets",
    description: "Number of tablets selled this year.",
    title: "Tablet sells",
    value: 92.6,
    color: "var(--mantine-color-orange-6)",
  },
  {
    id: "watches",
    description: "Number of watches selled this year.",
    title: "Watches sells",
    value: 1.3,
    color: "var(--mantine-color-red-6)",
  },
]

export function MetricsAndBarChart(props: StackProps) {
  return (
    <MotionViewport>
      <Stack component={motion.div} variants={varFade("inDown")} gap="sm" {...props}>
        <Text>Metrics + Bar Chart</Text>

        <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }}>
          {metrics.map(({ id, title, value, description, color }) => (
            <MetricsCard key={id}>
              <Group justify="space-between" wrap="nowrap">
                <div>
                  <MetricsCard.TextDimmed>{title}</MetricsCard.TextDimmed>
                  <MetricsCard.TextEmphasis mb="xs">
                    {formatNumber(value, { suffix: " M", maximumFractionDigits: 1 })}
                  </MetricsCard.TextEmphasis>
                  <MetricsCard.TextDimmed>{description}</MetricsCard.TextDimmed>
                </div>

                <BarChart
                  style={{ flexShrink: 0, alignSelf: "flex-end" }}
                  h="100%"
                  w={72}
                  tickLine="none"
                  gridAxis="none"
                  dataKey="month"
                  withXAxis={false}
                  withYAxis={false}
                  withTooltip={false}
                  barProps={{ barSize: 8, radius: 8 }}
                  series={[{ name: id, color }]}
                  data={data}
                />
              </Group>
            </MetricsCard>
          ))}
        </SimpleGrid>
      </Stack>
    </MotionViewport>
  )
}
