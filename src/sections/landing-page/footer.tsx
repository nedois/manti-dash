import { ActionIcon, Anchor, Box, Container, Divider, Flex, Group, Text } from "@mantine/core"
import { Logo } from "@/components/logo"
import { Icon } from "@/components/ui/icon"

const navLinks = [
  { href: "/docs", label: "Documentation" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
]

const socialNetworks = [
  {
    icon: "fa7-brands:square-x-twitter",
    label: "#twitter",
  },
  {
    icon: "fa7-brands:facebook-square",
    label: "#facebook",
  },
  { icon: "fa7-brands:github-square", label: "#github" },
]

export function Footer() {
  return (
    <Box pt="5rem" pb="xl">
      <Divider my="3rem" />

      <Container>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap="lg">
          <Logo />

          <Group gap="xl">
            {navLinks.map(link => (
              <Anchor key={link.href} fz="sm" c="dimmed">
                {link.label}
              </Anchor>
            ))}
          </Group>

          <Group gap="xs">
            {socialNetworks.map(social => (
              <ActionIcon key={social.label} variant="subtle" color="var(--mantine-color-dimmed)">
                <Icon icon={social.icon} fz="1.5rem" />
              </ActionIcon>
            ))}
          </Group>
        </Flex>

        <Divider my="3rem" />

        <Text fz="sm" c="dimmed" ta="center">
          © 2026 MantiDash. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}
