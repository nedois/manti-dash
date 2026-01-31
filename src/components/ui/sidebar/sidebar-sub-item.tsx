import { NavLink, type NavLinkProps } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { usePathname } from "@/hooks/use-pathname"
import classes from "./sidebar-sub-item.module.css"

export interface SidebarSubItemProps extends NavLinkProps {
  label: string
  href: string
}

export function SidebarSubItem({ label, href, ...props }: SidebarSubItemProps) {
  const pathname = usePathname()

  return (
    <NavLink
      component={Link}
      className={classes.item}
      to={href}
      active={pathname.endsWith(href)}
      label={label}
      leftSection={<span className="dot" />}
      {...props}
    />
  )
}
