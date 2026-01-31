import type { FC, ReactNode } from "react"
import { ActionIcon, AppShell, Overlay, RemoveScroll } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Icon } from "@/components/ui/icon"
import { useLargerThan } from "@/hooks/use-larger-than"
import classes from "./dashboard-app-shell.module.css"

interface SidebarProps {
  openNavbar?: () => void
  closeNavbar?: () => void
  toggleNavbar?: () => void
  sidebarOpened?: boolean
}

export interface DashboardAppShellProps {
  children: ReactNode
  header: FC<SidebarProps>
  sidebar: FC<SidebarProps>
}

export function DashboardAppShell({ children, header: Header, sidebar: Sidebar }: DashboardAppShellProps) {
  const [opened, { toggle, close, open }] = useDisclosure(true)
  const isSm = useLargerThan("sm")

  return (
    <RemoveScroll enabled={isSm && opened}>
      <AppShell
        layout="alt"
        padding="md"
        header={{ height: "var(--mantine-header-height)" }}
        navbar={{
          width: 280,
          breakpoint: "sm",
          collapsed: { mobile: !opened, desktop: !opened },
        }}
      >
        <AppShell.Header className={classes.header}>
          <ActionIcon color="text" onClick={toggle} variant="subtle">
            <Icon icon="ri:menu-4-line" fz="xl" />
          </ActionIcon>
          <Header openNavbar={open} closeNavbar={close} toggleNavbar={toggle} sidebarOpened={opened} />
        </AppShell.Header>
        <AppShell.Navbar className={classes.navbar}>
          <Sidebar openNavbar={open} closeNavbar={close} toggleNavbar={toggle} sidebarOpened={opened} />
        </AppShell.Navbar>
        <AppShell.Main className={classes.main}>{children}</AppShell.Main>
        <Overlay display={opened ? "inherit" : "none"} className={classes.overlay} onClick={close} />
      </AppShell>
    </RemoveScroll>
  )
}
