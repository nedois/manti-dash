import { Card, type MantineThemeOverride } from "@mantine/core"
import classNames from "./card.module.css"

export default {
  Card: Card.extend({
    classNames,
    defaultProps: {
      withBorder: true,
    },
    styles: (theme) => {
      return {
        root: {
          backgroundColor:
            theme.primaryColor === "rose" || theme.primaryColor === "green"
              ? "var(--mantine-color-secondary-filled)"
              : undefined,
        },
      }
    },
  }),
} as MantineThemeOverride["components"]
