import { Anchor, Text } from "@mantine/core"
import { Link } from "@tanstack/react-router"

export interface BreadcrumbItemProps {
  label: string
  to?: string
}

export function BreadcrumbsItem({ to, label }: BreadcrumbItemProps) {
  if (to) {
    return (
      <Anchor fz="sm" underline="never" c="inherit" component={Link} to={to}>
        {label}
      </Anchor>
    )
  }

  return (
    <Text key={label} c="dimmed" fz="sm">
      {label}
    </Text>
  )
}
