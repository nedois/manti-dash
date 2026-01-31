import { ActionIcon, Button, type MantineThemeOverride } from "@mantine/core"
import { match } from "@/utilities/match"
import buttonClassNames from "./button.module.css"

export default {
  Button: Button.extend({
    classNames: buttonClassNames,
    vars: (theme, props) => {
      const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined
      const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
      const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor)
      const variant = props.variant ?? "filled"
      const color = match(
        undefined,
        [variant === "filled" && !colorKey, "var(--mantine-primary-color-contrast)"],
        [variant === "filled" && !!colorKey, `var(--mantine-color-${colorKey}-contrast)`],
        [variant === "white" && (isNeutralColor || isNeutralPrimaryColor), "var(--mantine-color-black)"],
      )
      return {
        root: {
          "--button-color": color,
        },
      }
    },
  }),
  ActionIcon: ActionIcon.extend({
    defaultProps: {
      variant: "subtle",
    },
    vars: (theme, props) => {
      const colorKey = props.color && Object.keys(theme.colors).includes(props.color) ? props.color : undefined
      const isNeutralColor = colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(colorKey)
      const isNeutralPrimaryColor = !colorKey && ["zinc", "slate", "gray", "neutral", "stone"].includes(theme.primaryColor)
      const variant = props.variant ?? "filled"
      const color = match(
        undefined,
        [variant === "filled" && !colorKey, "var(--mantine-primary-color-contrast)"],
        [variant === "filled" && !!colorKey, `var(--mantine-color-${colorKey}-contrast)`],
        [variant === "white" && (isNeutralColor || isNeutralPrimaryColor), "var(--mantine-color-black)"],
      )
      return {
        root: {
          "--ai-color": color,
        },
      }
    },
  }),
} as MantineThemeOverride["components"]
