import { Flex, ScrollArea } from "@mantine/core"
import { Logo } from "@/components/logo"
import { Icon } from "@/components/ui/icon"
import { Sidebar, type SidebarSectionProps } from "@/components/ui/sidebar"

const sections: Array<SidebarSectionProps> = [
  {
    header: "Overview",
    items: [
      {
        label: "Welcome",
        href: "/dashboard/overview",
        icon: <Icon icon="lucide:house" h="1rem" />,
      },
    ],
  },
  {
    header: "Apps",
    items: [
      {
        label: "Kanban",
        href: "/dashboard/apps/kanban",
        icon: <Icon icon="lucide:kanban" h="1rem" />,
        badge: "🚧",
      },
      {
        label: "Email",
        href: "/dashboard/apps/email",
        icon: <Icon icon="lucide:mail" h="1rem" />,
        badge: "🚧",
      },
    ],
  },
  {
    header: "Management",
    items: [
      {
        label: "Customers",
        href: "/dashboard/management/customers",
        icon: <Icon icon="lucide:users" h="1rem" />,
        subItems: [
          { href: "/dashboard/management/customers", label: "List" },
        ],
      },
    ],
  },
  {
    header: "Widgets",
    items: [
      {
        label: "Charts",
        href: "/dashboard/widgets/charts",
        icon: <Icon icon="lucide:chart-column" h="1rem" />,
        badge: "🚧",
      },
      {
        label: "Metrics",
        href: "/dashboard/widgets/metrics",
        icon: <Icon icon="lucide:chart-line" h="1rem" />,
      },
      {
        label: "Tables",
        href: "/dashboard/widgets/tables",
        icon: <Icon icon="lucide:table" h="1rem" />,
        badge: "🚧",
      },
    ],
  },
  {
    header: "Authentication",
    items: [
      {
        label: "Register",
        href: "/dashboard/auth/register",
        icon: <Icon icon="lucide:user-plus" h="1rem" />,
        badge: "🚧",
      },
      {
        label: "Login",
        href: "/dashboard/auth/login",
        icon: <Icon icon="lucide:log-in" h="1rem" />,
        badge: "🚧",
      },
      {
        label: "Forgot Password",
        href: "/dashboard/auth/forgot-password",
        icon: <Icon icon="lucide:key-round" h="1rem" />,
        badge: "🚧",
      },
      {
        label: "OTP",
        href: "/dashboard/auth/otp",
        icon: <Icon icon="lucide:smartphone" h="1rem" />,
        badge: "🚧",
      },
    ],
  },
]

export function DashboardSidebar() {
  return (
    <Flex direction="column" h="100%">
      <Flex
        align="center"
        pl="1.3rem"
        h="var(--mantine-header-height)"
        style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}
      >
        <Logo href="/" />
      </Flex>
      <ScrollArea flex="1">
        <Sidebar p="md" sections={sections} />
      </ScrollArea>
    </Flex>
  )
}
