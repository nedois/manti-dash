import { ActionIcon, Anchor, Button, Group, Tooltip } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Link } from "@tanstack/react-router"
import { Logo } from "@/components/logo"
import { ThemeOptionsDrawer } from "@/components/theme-options-drawer"
import { FixedMainHeader } from "@/components/ui/fixed-main-header"
import { Icon } from "@/components/ui/icon"
import { MobileMenu } from "./mobile-menu"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pages", label: "Pages" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
]

export function Header() {
  const [themeDrawerOpened, { open: openThemeDrawer, close: closeThemeDrawer }] = useDisclosure(false)

  return (
    <>
      <ThemeOptionsDrawer opened={themeDrawerOpened} onClose={closeThemeDrawer} />
      <FixedMainHeader justify="space-between">
        <Group wrap="nowrap">
          <MobileMenu links={navLinks} variant="subtle" color="text" hiddenFrom="lg" />
          <Logo />
        </Group>

        <Group gap="xl" visibleFrom="lg">
          {navLinks.map(link => (
            <Anchor key={link.href} href={link.href} fz="sm" c="dimmed">
              {link.label}
            </Anchor>
          ))}
        </Group>

        <Group gap="xs" wrap="nowrap">
          <Tooltip label="Theme configuration">
            <ActionIcon color="text" variant="subtle" onClick={openThemeDrawer}>
              <Icon icon="lucide:palette" fz="xl" />
            </ActionIcon>
          </Tooltip>

          <Button component={Link} to="/dashboard" color="text" variant="subtle" visibleFrom="sm">
            Live Demo
          </Button>

          <Button rightSection={<Icon icon="lucide:arrow-right" />}>Buy Now</Button>
        </Group>
      </FixedMainHeader>
    </>
  )
}
