import { createFileRoute } from "@tanstack/react-router"
import { lazy } from "react"

export const Route = createFileRoute("/dashboard")({
  component: lazy(() => import("@/layouts/dashboard-layout")),
})
