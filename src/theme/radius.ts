import { type DefaultMantineColor, rem } from "@mantine/core"

const theme = {
  defaultRadius: "sm",
  radius: {
    xs: rem("6px"),
    sm: rem("8px"),
    md: rem("12px"),
    lg: rem("16px"),
    xl: rem("24px"),
  },
} as const

type ExtendedRadius = keyof typeof theme.radius | DefaultMantineColor

declare module "@mantine/core" {
  export interface MantineThemeSizesOverride {
    radius: Record<ExtendedRadius, string>
  }
}

export default theme
