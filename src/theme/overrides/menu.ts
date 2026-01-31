import { type MantineThemeOverride, Menu } from "@mantine/core"

export default {
  Menu: Menu.extend({
    defaultProps: {
      shadow: "md",
      withArrow: true,
      transitionProps: {
        transition: "scale",
        duration: 200,
      },
    },
  }),
} as MantineThemeOverride["components"]
