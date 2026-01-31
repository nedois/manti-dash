import { LoadingOverlay, type MantineThemeOverride } from "@mantine/core"

export default {
  LoadingOverlay: LoadingOverlay.extend({
    defaultProps: {
      zIndex: 1000,
      overlayProps: {
        blur: 4,
      },
      loaderProps: {
        type: "bars",
      },
    },
  }),
} as MantineThemeOverride["components"]
