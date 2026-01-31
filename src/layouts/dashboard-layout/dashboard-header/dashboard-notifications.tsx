import { ActionIcon, type ActionIconProps, Button, Drawer, type ElementProps, Indicator, Tooltip } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ComingSoon } from "@/components/coming-soon"
import { Icon } from "@/components/ui/icon"

type NotificationsProps = Omit<ActionIconProps, "children" | "c" | "onClick" | "size">
  & ElementProps<"button", keyof ActionIconProps>

export function DashboardNotificationsBell(props: NotificationsProps) {
  const [opened, { open, close }] = useDisclosure(false)

  const hasNewNotifications = true

  return (
    <>
      <Tooltip label="Notifications">
        <ActionIcon onClick={open} style={{ overflow: "visible", ...props.style }} {...props}>
          <Indicator inline withBorder processing={hasNewNotifications} disabled={!hasNewNotifications}>
            <Icon icon="lucide:bell" fz="xl" />
          </Indicator>
        </ActionIcon>
      </Tooltip>

      <Drawer.Root position="right" opened={opened} onClose={close} size="380px">
        <Drawer.Overlay />
        <Drawer.Content pos="relative">
          <Drawer.Header>
            <Drawer.Title mr="1rem">Notifications</Drawer.Title>
            <Button size="compact-sm" variant="subtle">
              View all
            </Button>
            <Drawer.CloseButton />
          </Drawer.Header>

          <Drawer.Body>
            <ComingSoon mt="xl" description="List of realtime notifications." />
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  )
}
