import { type MantineThemeOverride, Popover } from "@mantine/core"

export default {
  Popover: Popover.extend({
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
