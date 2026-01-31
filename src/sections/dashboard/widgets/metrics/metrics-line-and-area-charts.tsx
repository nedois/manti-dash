import { AreaChart, LineChart } from "@mantine/charts"
import { Button, CardSection, Group, SimpleGrid, type StackProps, Text } from "@mantine/core"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { MetricsCard } from "@/components/ui/metrics-card"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { Stack } from "@/components/ui/stack"
import { formatCurrency, formatPercent } from "@/utilities/number"

const metrics = {
  subscriptions: [
    { date: "Mar 22", users: 110 },
    { date: "Mar 23", users: 60 },
    { date: "Mar 24", users: 80 },
    { date: "Mar 25", users: 200 },
    { date: "Mar 26", users: 150 },
    { date: "Mar 27", users: 40 },
    { date: "Mar 28", users: 120 },
    { date: "Mar 29", users: 10 },
  ],
  temperatures: [
    { date: "Jan", temperature: -25 },
    { date: "Feb", temperature: -10 },
    { date: "Mar", temperature: 5 },
    { date: "Apr", temperature: 15 },
    { date: "May", temperature: 30 },
    { date: "Jun", temperature: 15 },
    { date: "Jul", temperature: 30 },
    { date: "Aug", temperature: 40 },
    { date: "Sep", temperature: 15 },
    { date: "Oct", temperature: 20 },
    { date: "Nov", temperature: 0 },
    { date: "Dec", temperature: -10 },
  ],
}

export function MetricsLineAndAreaCharts(props: StackProps) {
  return (
    <MotionViewport>
      <Stack component={motion.div} variants={varFade("inDown")} gap="sm" {...props}>
        <Text>Metrics + Charts</Text>

        <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }}>
          {/* Line Chart */}
          <MetricsCard>
            <Stack gap="xl">
              <Stack gap="0.25rem">
                <MetricsCard.Text>Total Sales</MetricsCard.Text>
                <MetricsCard.Metric>{formatCurrency(15231.89)}</MetricsCard.Metric>
                <MetricsCard.Text>
                  {formatPercent(0.201, { prefix: "+" })}
                  {" "}
                  from last month
                </MetricsCard.Text>
              </Stack>

              <LineChart
                h={80}
                data={metrics.temperatures}
                series={[{ name: "temperature", color: "red" }]}
                dataKey="date"
              />
            </Stack>
          </MetricsCard>

          {/* Area Chart */}
          <MetricsCard>
            <Stack gap="xl">
              <Group align="flex-start">
                <Stack flex="1" gap="0.25rem">
                  <MetricsCard.Text>Total sales</MetricsCard.Text>
                  <MetricsCard.Metric>{formatCurrency(10231.0)}</MetricsCard.Metric>
                  <MetricsCard.Text>
                    {formatPercent(0.61, { prefix: "+" })}
                    {" "}
                    from last month
                  </MetricsCard.Text>
                </Stack>
                <Button size="xs" variant="subtle">
                  View More
                </Button>
              </Group>

              <CardSection mx="-md">
                <AreaChart
                  h={80}
                  dataKey="date"
                  series={[{ name: "users", color: "primary" }]}
                  data={metrics.subscriptions}
                />
              </CardSection>
            </Stack>
          </MetricsCard>
        </SimpleGrid>
      </Stack>
    </MotionViewport>
  )
}
