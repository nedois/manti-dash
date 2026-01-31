import { Center } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"
import { PageHeader } from "@/components/ui/page-header"

export const Route = createFileRoute("/dashboard/management/customers/")({
  component: ListCustomersPage,
})

const breadcrumbs = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Management", to: "/dashboard/management/customers" },
  { label: "Customers", to: "/dashboard/management/customers" },
  { label: "List" },
]

function ListCustomersPage() {
  return (
    <>
      <PageHeader title="List customers" breadcrumbs={breadcrumbs} />
      <Center flex="1">
        <ComingSoon description="Manage, organize, and access your customers from one place." />
      </Center>
    </>
  )
}
