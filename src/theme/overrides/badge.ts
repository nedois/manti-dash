import { Badge, type BadgeVariant, type MantineThemeOverride } from "@mantine/core"
import classNames from "./badge.module.css"

type ExtendedBadgeVariant = BadgeVariant | "ghost" | "glow"

declare module "@mantine/core" {
  export interface BadgeProps {
    variant?: ExtendedBadgeVariant
  }
}

export default {
  Badge: Badge.extend({ classNames }),
} as MantineThemeOverride["components"]
