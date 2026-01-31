import { createTheme, DEFAULT_THEME, mergeMantineTheme, rem } from "@mantine/core"
import breakpoints from "./breakpoints"
import theme from "./colors"
import components from "./overrides"
import radius from "./radius"
import typography from "./typography"

export const themes = {
  amber: { primaryShade: { light: 5, dark: 5 }, secondaryColor: "stone" },
  blue: { primaryShade: { light: 6, dark: 5 }, secondaryColor: "slate" },
  emerald: { primaryShade: { light: 5, dark: 5 }, secondaryColor: "stone" },
  fuchsia: { primaryShade: { light: 5, dark: 7 }, secondaryColor: "gray" },
  gray: { primaryShade: { light: 8, dark: 0 }, secondaryColor: "gray" },
  green: { primaryShade: { light: 6, dark: 5 }, secondaryColor: "stone" },
  indigo: { primaryShade: { light: 5, dark: 6 }, secondaryColor: "gray" },
  lime: { primaryShade: { light: 5, dark: 4 }, secondaryColor: "stone" },
  neutral: { primaryShade: { light: 8, dark: 0 }, secondaryColor: "neutral" },
  orange: { primaryShade: { light: 5, dark: 6 }, secondaryColor: "stone" },
  pink: { primaryShade: { light: 5, dark: 6 }, secondaryColor: "gray" },
  purple: { primaryShade: { light: 5, dark: 6 }, secondaryColor: "gray" },
  red: { primaryShade: { light: 5, dark: 5 }, secondaryColor: "neutral" },
  rose: { primaryShade: { light: 5, dark: 5 }, secondaryColor: "stone" },
  slate: { primaryShade: { light: 8, dark: 0 }, secondaryColor: "slate" },
  stone: { primaryShade: { light: 8, dark: 0 }, secondaryColor: "stone" },
  teal: { primaryShade: { light: 5, dark: 4 }, secondaryColor: "slate" },
  violet: { primaryShade: { light: 5, dark: 6 }, secondaryColor: "gray" },
  yellow: { primaryShade: { light: 4, dark: 4 }, secondaryColor: "stone" },
  zinc: { primaryShade: { light: 8, dark: 0 }, secondaryColor: "zinc" },
} as const

export type ThemeName = keyof typeof themes

const themeOverride = createTheme({
  ...typography,
  ...theme,
  ...radius,
  ...breakpoints,
  components,
  cursorType: "pointer",
  other: {
    headerHeight: rem(64),
  },
})

export default mergeMantineTheme(DEFAULT_THEME, themeOverride)
