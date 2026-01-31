import { Center } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"
import { PageHeader } from "@/components/ui/page-header"

export const Route = createFileRoute("/dashboard/widgets/tables")({
  component: TablesWidgetsPage,
})

const breadcrumbs = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Widgets", to: "/dashboard/widgets" },
  { label: "Tables" },
]

function TablesWidgetsPage() {
  return (
    <>
      <PageHeader title="Tables" breadcrumbs={breadcrumbs} />
      <Center flex="1">
        <ComingSoon description="Advanced data tables with sorting, filtering, and pagination." />
      </Center>
    </>
  )
}
