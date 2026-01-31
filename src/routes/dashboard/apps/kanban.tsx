import { Center } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"
import { PageHeader } from "@/components/ui/page-header"

export const Route = createFileRoute("/dashboard/apps/kanban")({
  component: KanbanPage,
})

const breadcrumbs = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Apps", to: "/dashboard/apps/Kanban" },
  { label: "Kanban" },
]

function KanbanPage() {
  return (
    <>
      <PageHeader title="Kanban" breadcrumbs={breadcrumbs} />
      <Center flex="1">
        <ComingSoon description="Visual task boards and workflow management." />
      </Center>
    </>

  )
}
