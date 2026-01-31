import { BarChart } from "@mantine/charts"
import { Button, Group, SimpleGrid, type StackProps, Text, ThemeIcon } from "@mantine/core"
import { capitalize } from "es-toolkit/string"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { Icon } from "@/components/ui/icon"
import { MetricsCard } from "@/components/ui/metrics-card"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { Stack } from "@/components/ui/stack"
import { formatCurrency } from "@/utilities/number"

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
    title: "Customer",
    description: "67% acquired this week",
    revenue: 27800,
    profit: 30052,
    invoices: 78962,
    expense: 27707,
  },
  {
    title: "Sales",
    description: "30% acquired this week",
    revenue: 27800,
    profit: 30052,
    invoices: 78962,
    expense: 27707,
  },
  {
    title: "Inventory",
    description: "10% acquired this week",
    revenue: 27800,
    profit: 30052,
    invoices: 78962,
    expense: 27707,
  },
  {
    title: "Profit",
    description: "92% acquired this week",
    revenue: 27800,
    profit: 30052,
    invoices: 78962,
    expense: 27707,
  },
]

const categories = [
  { name: "revenue", icon: "lucide:landmark", color: "red" },
  { name: "profit", icon: "lucide:gift", color: "teal" },
  { name: "invoices", icon: "lucide:file-text", color: "indigo" },
  { name: "expense", icon: "lucide:activity", color: "orange" },
] as const

export function MetricsAndListAndChart(props: StackProps) {
  return (
    <MotionViewport>
      <Stack component={motion.div} variants={varFade("inDown")} gap="sm" {...props}>
        <Text>Metrics + List + Chart</Text>

        <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }}>
          {metrics.map(({ title, description, ...metricsCategories }) => (
            <MetricsCard key={title}>
              <Stack gap="xl">
                <Group justify="space-between" align="flex-start">
                  <div>
                    <MetricsCard.TextEmphasis>{title}</MetricsCard.TextEmphasis>
                    <MetricsCard.TextDimmed>{description}</MetricsCard.TextDimmed>
                  </div>
                  <Button variant="subtle" size="compact-sm">
                    View all
                  </Button>
                </Group>

                <SimpleGrid cols={2}>
                  {categories.map(({ name, icon, color }) => (
                    <Group key={name} gap="xs">
                      <ThemeIcon variant="light" size="xl" color={color}>
                        <Icon icon={icon} height="50%" />
                      </ThemeIcon>
                      <div>
                        <MetricsCard.TextDimmed>{capitalize(name)}</MetricsCard.TextDimmed>
                        <MetricsCard.TextEmphasis>{formatCurrency(metricsCategories[name])}</MetricsCard.TextEmphasis>
                      </div>
                    </Group>
                  ))}
                </SimpleGrid>

                <BarChart
                  style={{ flexShrink: 0 }}
                  h={140}
                  tickLine="none"
                  gridAxis="none"
                  dataKey="month"
                  withYAxis={false}
                  series={[
                    { name: "watches", color: "red.6" },
                    { name: "smartphones", color: "teal.6" },
                    { name: "laptops", color: "indigo.6" },
                    { name: "tablets", color: "orange.6" },
                  ]}
                  data={data}
                />
              </Stack>
            </MetricsCard>
          ))}
        </SimpleGrid>
      </Stack>
    </MotionViewport>
  )
}
