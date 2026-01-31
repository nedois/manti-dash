import type { ReactNode } from "react"
import { NavLink, type NavLinkProps } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { usePathname } from "@/hooks/use-pathname"
import classes from "./sidebar-item.module.css"
import { SidebarSubItem, type SidebarSubItemProps } from "./sidebar-sub-item"

export interface SidebarItemProps extends NavLinkProps {
  label: string
  href: string
  icon: ReactNode
  badge?: ReactNode
  subItems?: Array<SidebarSubItemProps>
}

export function SidebarItem({ href, icon, badge, subItems, ...props }: SidebarItemProps) {
  const pathname = usePathname()

  if (subItems) {
    return (
      <NavLink
        className={classes.item}
        childrenOffset={0}
        active={pathname.endsWith(href)}
        leftSection={icon}
        rightSection={badge}
        {...props}
      >
        {subItems.map(item => (
          <SidebarSubItem key={item.label} variant="subtle" {...item} />
        ))}
      </NavLink>
    )
  }

  return (
    <NavLink
      className={classes.item}
      component={Link}
      to={href}
      leftSection={icon}
      rightSection={badge}
      active={pathname.endsWith(href)}
      {...props}
    />
  )
}
