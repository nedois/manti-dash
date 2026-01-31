import { Center } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"
import { PageHeader } from "@/components/ui/page-header"

export const Route = createFileRoute("/dashboard/apps/email")({
  component: EmailPage,
})

const breadcrumbs = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Apps", to: "/dashboard/apps/Kanban" },
  { label: "Email" },
]

function EmailPage() {
  return (
    <>
      <PageHeader title="Email" breadcrumbs={breadcrumbs} />
      <Center flex="1">
        <ComingSoon description="Modern SMTP client with a clean interface." />
      </Center>
    </>

  )
}
