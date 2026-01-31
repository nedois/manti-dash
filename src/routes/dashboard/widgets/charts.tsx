import { Center } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"
import { PageHeader } from "@/components/ui/page-header"

export const Route = createFileRoute("/dashboard/widgets/charts")({
  component: ChartsWidgetsPage,
})

const breadcrumbs = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Widgets", to: "/dashboard/widgets" },
  { label: "Charts" },
]

function ChartsWidgetsPage() {
  return (
    <>
      <PageHeader title="Charts" breadcrumbs={breadcrumbs} />
      <Center flex="1">
        <ComingSoon description="Interactive data visualizations and analytics dashboards." />
      </Center>
    </>
  )
}
