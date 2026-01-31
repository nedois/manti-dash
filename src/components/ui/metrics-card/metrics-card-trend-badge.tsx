import { Badge, type BadgeProps } from "@mantine/core"
import { Icon } from "@/components/ui/icon"

export interface MetricsCardTrendBadgeProps extends Omit<BadgeProps, "color"> {
  increasing: boolean
}

const config = {
  increasing: { icon: "lucide:trending-up", color: "teal" },
  decreasing: { icon: "lucide:trending-down", color: "red" },
}

export function MetricsCardTrendBadge({ increasing, ...props }: MetricsCardTrendBadgeProps) {
  const { icon, color } = increasing ? config.increasing : config.decreasing
  return (
    <Badge
      size="sm"
      component="span"
      variant="light"
      color={color}
      fw={600}
      leftSection={<Icon icon={icon} height="1rem" />}
      {...props}
    />
  )
}
