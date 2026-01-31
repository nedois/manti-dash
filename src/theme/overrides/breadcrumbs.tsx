import { Breadcrumbs, type MantineThemeOverride } from "@mantine/core"
import { Icon } from "@/components/ui/icon"

export default {
  Breadcrumbs: Breadcrumbs.extend({
    defaultProps: {
      separator: <Icon icon="octicon:dot-fill-24" height="0.5rem" c="dimmed" opacity={0.4} />,
    },
  }),
} as MantineThemeOverride["components"]
