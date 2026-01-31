import { type DefaultMantineSize, rem } from "@mantine/core"

const theme = {
  spacing: {
    "4xs": rem("2px"),
    "3xs": rem("4px"),
    "2xs": rem("8px"),
    "xs": rem("10px"),
    "sm": rem("12px"),
    "md": rem("16px"),
    "lg": rem("20px"),
    "xl": rem("24px"),
    "2xl": rem("28px"),
    "3xl": rem("32px"),
    "4xl": rem("40px"),
  } as const,
}

type ExtendedSpacing = keyof typeof theme.spacing | DefaultMantineSize

declare module "@mantine/core" {
  export interface MantineThemeSizesOverride {
    spacing: Record<ExtendedSpacing, string>
  }
}

export default theme
