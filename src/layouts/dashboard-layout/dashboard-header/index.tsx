import { ActionIcon, Badge, Group, TextInput } from "@mantine/core"
import { Icon } from "@/components/ui/icon"
import { DashboardAuthUser } from "./dashboard-auth-user"
import { DashboardNotificationsBell } from "./dashboard-notifications"

export function DashboardHeader() {
  return (
    <Group w="100%" h="100%" px="md" wrap="nowrap" justify="space-between">
      <TextInput
        visibleFrom="md"
        placeholder="Search for feature"
        leftSection={<Icon icon="lucide:search" />}
        rightSection={(
          <Badge size="sm" radius="sm" variant="ghost">
            K
          </Badge>
        )}
      />

      <ActionIcon hiddenFrom="md" color="text">
        <Icon icon="lucide:search" fz="xl" />
      </ActionIcon>

      <Group>
        <DashboardNotificationsBell color="text" />
        <DashboardAuthUser />
      </Group>
    </Group>
  )
}
