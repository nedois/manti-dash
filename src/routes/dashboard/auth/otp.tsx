import { Center } from "@mantine/core"
import { createFileRoute } from "@tanstack/react-router"
import { ComingSoon } from "@/components/coming-soon"

export const Route = createFileRoute("/dashboard/auth/otp")({
  component: OtpPage,
})

function OtpPage() {
  return (
    <Center flex="1">
      <ComingSoon description="Two-factor authentication setup." />
    </Center>
  )
}
