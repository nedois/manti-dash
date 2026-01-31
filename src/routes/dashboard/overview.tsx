import { Grid } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { AverageSalesCard } from "@/sections/dashboard/overview/average-sales-card"
import { Metrics } from "@/sections/dashboard/overview/metrics"
import { RecentSalesCard } from "@/sections/dashboard/overview/recent-sales-card"
import { Welcome } from "@/sections/dashboard/overview/welcome"

export const Route = createFileRoute("/dashboard/overview")({
  component: OverviewPage,
})

function OverviewPage() {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Welcome />
      </Grid.Col>
      <Grid.Col span={12}>
        <Metrics />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 7 }}>
        <AverageSalesCard />
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 5 }}>
        <RecentSalesCard />
      </Grid.Col>
    </Grid>
  )
}
