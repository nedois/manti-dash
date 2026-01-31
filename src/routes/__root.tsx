import { createRootRoute, Outlet, Scripts } from "@tanstack/react-router"
import { Devtools } from "@/components/devtools"

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <Outlet />
      <Devtools />
      <Scripts />
    </>
  )
}
