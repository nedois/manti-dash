import { type DefaultMantineSize, rem } from "@mantine/core"

const theme = {
  fontFamily: "Inter, system-ui, sans-serif",
  fontSmoothing: true,
  headings: {
    fontFamily: "Geist, system-ui, sans-serif",
    sizes: {
      h1: {
        fontSize: "clamp(1.875rem, 1.2rem + 2.5vw, 3.375rem)",
        lineHeight: "1.15",
        fontWeight: "600",
      },
      h2: {
        fontSize: "clamp(1.5rem, 1.1rem + 2vw, 2.5rem)",
        lineHeight: "1.2",
        fontWeight: "600",
      },
      h3: {
        fontSize: "clamp(1.25rem, 1rem + 1.5vw, 2rem)",
        lineHeight: "1.25",
        fontWeight: "600",
      },
      h4: {
        fontSize: "clamp(1.125rem, 1rem + 0.8vw, 1.5rem)",
        lineHeight: "1.3",
        fontWeight: "600",
      },
      h5: {
        fontSize: "clamp(1rem, 0.95rem + 0.4vw, 1.125rem)",
        lineHeight: "1.35",
        fontWeight: "600",
      },
      h6: {
        fontSize: "clamp(0.875rem, 0.85rem + 0.3vw, 1rem)",
        lineHeight: "1.4",
        fontWeight: "600",
      },
    },
  },
  fontSizes: {
    "xs": rem("12px"),
    "sm": rem("14px"),
    "md": rem("16px"),
    "lg": rem("18px"),
    "xl": rem("20px"),
    "2xl": rem("24px"),
    "3xl": rem("30px"),
    "4xl": rem("36px"),
    "5xl": rem("48px"),
  },

  lineHeights: {
    xs: rem("18px"),
    sm: rem("20px"),
    md: rem("24px"),
    lg: rem("28px"),
  },
} as const

type ExtendedFontSizes = keyof typeof theme.fontSizes | DefaultMantineSize
type ExtendedLineHeights = keyof typeof theme.lineHeights | DefaultMantineSize

declare module "@mantine/core" {
  export interface MantineThemeSizesOverride {
    fontSizes: Record<ExtendedFontSizes, string>
    lineHeights: Record<ExtendedLineHeights, string>
  }
}

export default theme
