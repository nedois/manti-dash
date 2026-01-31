import type { DefaultMantineSize } from "@mantine/core"

const theme = {
  breakpoints: {
    "xs": "30em",
    "sm": "40em",
    "md": "48em",
    "lg": "64em",
    "xl": "80em",
    "2xl": "96em",
    "3xl": "120em",
    "4xl": "160em",
  },
} as const

type ExtendedBreakpoints = keyof typeof theme.breakpoints | DefaultMantineSize

declare module "@mantine/core" {
  export interface MantineThemeSizesOverride {
    breakpoints: Record<ExtendedBreakpoints, string>
  }
}

export default theme
