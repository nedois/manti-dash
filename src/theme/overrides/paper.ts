import { type MantineThemeOverride, Paper } from "@mantine/core"
import classNames from "./paper.module.css"

export default {
  Paper: Paper.extend({
    classNames,
    defaultProps: {
      withBorder: true,
    },
  }),
} as MantineThemeOverride["components"]
