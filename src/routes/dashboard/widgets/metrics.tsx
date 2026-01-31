import { Stack } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { PageHeader } from "@/components/ui/page-header"
import { MetricsAndBarChart } from "@/sections/dashboard/widgets/metrics/metrics-and-bar-chart"
import { MetricsAndIcons } from "@/sections/dashboard/widgets/metrics/metrics-and-icons"
import { MetricsAndListAndChart } from "@/sections/dashboard/widgets/metrics/metrics-and-list-and-chart"
import { MetricsAndProgressRing } from "@/sections/dashboard/widgets/metrics/metrics-and-progress-ring"
import { MetricsLineAndAreaCharts } from "@/sections/dashboard/widgets/metrics/metrics-line-and-area-charts"

export const Route = createFileRoute("/dashboard/widgets/metrics")({
  component: MetricsWidgetsPage,
})

const breadcrumbs = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Widgets", to: "/dashboard/widgets" },
  { label: "Metrics" },
]

function MetricsWidgetsPage() {
  return (
    <>
      <PageHeader title="Metric cards" breadcrumbs={breadcrumbs} />

      <Stack gap="xl">
        <MetricsLineAndAreaCharts />
        <MetricsAndIcons />
        <MetricsAndProgressRing />
        <MetricsAndBarChart />
        <MetricsAndListAndChart />
      </Stack>
    </>
  )
}
