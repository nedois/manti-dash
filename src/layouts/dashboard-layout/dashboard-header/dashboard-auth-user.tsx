import { Avatar, type AvatarProps, type ElementProps, Menu } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ThemeOptionsDrawer } from "@/components/theme-options-drawer"
import { Icon } from "@/components/ui/icon"

type DashboardAuthUserProps = Omit<AvatarProps, "src" | "alt"> & ElementProps<"div", keyof AvatarProps>

export function DashboardAuthUser(props: DashboardAuthUserProps) {
  const [themeDrawerOpened, { open: openThemeDrawer, close: closeThemeDrawer }] = useDisclosure(false)

  const user = { name: "John Matias Doe", displayName: "John Doe" }

  return (
    <>
      <ThemeOptionsDrawer opened={themeDrawerOpened} onClose={closeThemeDrawer} />

      <Menu>
        <Menu.Target>
          <Avatar
            {...props}
            color="initials"
            alt={user.name}
            name={user.displayName}
            style={{ cursor: "pointer", ...props.style }}
          />
        </Menu.Target>
        <Menu.Dropdown w={240}>
          <Menu.Item leftSection={<Icon icon="lucide:palette" />} onClick={openThemeDrawer}>
            Themes
          </Menu.Item>
          <Menu.Item leftSection={<Icon icon="lucide:heart" />}>Liked posts</Menu.Item>
          <Menu.Item leftSection={<Icon icon="lucide:star" />}>Saved posts</Menu.Item>
          <Menu.Item leftSection={<Icon icon="lucide:message-circle" />}>Your comments</Menu.Item>

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item leftSection={<Icon icon="lucide:settings" />}>Account Settings</Menu.Item>
          <Menu.Item leftSection={<Icon icon="lucide:rotate-ccw-key" />}>Change account</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item leftSection={<Icon icon="lucide:pause" />}>Pause subscription</Menu.Item>
          <Menu.Item color="red" leftSection={<Icon icon="lucide:trash" />}>
            Delete account
          </Menu.Item>

          <Menu.Divider />
          <Menu.Item leftSection={<Icon icon="lucide:log-out" />}>Log out</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
