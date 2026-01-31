import { Center } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"

export const Route = createFileRoute("/dashboard/auth/register")({
  component: RegisterPage,
})

function RegisterPage() {
  return (
    <Center flex="1">
      <ComingSoon description="User registration with email verification." />
    </Center>
  )
}
