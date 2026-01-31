import type { BreadcrumbItemProps } from "./breadcrumbs-item"
import { ActionIcon, Menu } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { Icon } from "@/components/ui/icon"

export interface BreadcrumbsMenuProps {
  items: Array<BreadcrumbItemProps>
}

export function BreadcrumbsMenu({ items }: BreadcrumbsMenuProps) {
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon variant="subtle" c="inherit">
          <Icon icon="ph:dots-three" height="100%" />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {items.map(item => (
          <Menu.Item component={Link} key={item.label} to={item.to ?? "#"}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}
