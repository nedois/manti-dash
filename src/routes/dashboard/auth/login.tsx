import { Center } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"

export const Route = createFileRoute("/dashboard/auth/login")({
  component: LoginPage,
})

function LoginPage() {
  return (
    <Center flex="1">
      <ComingSoon description="Secure authentication with multiple providers." />
    </Center>
  )
}
