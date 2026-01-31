import { type MantineThemeOverride, RingProgress } from "@mantine/core"

export default {
  RingProgress: RingProgress.extend({
    defaultProps: {
      thickness: 6,
      roundCaps: true,
    },
  }),
} as MantineThemeOverride["components"]
