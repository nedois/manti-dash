import { LineChart } from "@mantine/charts"
import { Card } from "@mantine/core"
import { CardTitle } from "@/components/ui/card-title"

const data = [
  { date: "Mar 22", Apples: 2890, Oranges: 2338, Tomatoes: 2452 },
  { date: "Mar 23", Apples: 2756, Oranges: 2103, Tomatoes: 2402 },
  { date: "Mar 24", Apples: 3322, Oranges: 986, Tomatoes: 1821 },
  { date: "Mar 25", Apples: 3470, Oranges: 2108, Tomatoes: 2809 },
  { date: "Mar 26", Apples: 3129, Oranges: 1726, Tomatoes: 2290 },
]

export function AverageSalesCard() {
  return (
    <Card>
      <CardTitle title="Average Fruits Sales" description="Daily sales evolution" />
      <Card.Section p="md" pl="0">
        <LineChart
          h={300}
          withXAxis
          withYAxis
          withTooltip
          withLegend
          gridAxis="xy"
          data={data}
          dataKey="date"
          referenceLines={[
            { y: 1800, label: "Average sales", color: "red.6" },
            { x: "Mar 25", label: "Report out", color: "red.6" },
          ]}
          series={[
            { name: "Apples", color: "indigo.6" },
            { name: "Oranges", color: "blue.6" },
            { name: "Tomatoes", color: "teal.6" },
          ]}
        />
      </Card.Section>
    </Card>
  )
}
