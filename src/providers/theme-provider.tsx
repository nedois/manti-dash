import { MantineProvider, type MantineProviderProps } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { Notifications } from "@mantine/notifications"
import { NavigationProgress } from "@mantine/nprogress"
import { useThemeStore } from "@/stories/theme-store"
import { cssVariableResolver } from "@/theme/css-variable-resolver"

type ThemeProviderProps = Omit<MantineProviderProps, "theme">

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const theme = useThemeStore(state => state.theme)
  const colorScheme = useThemeStore(state => state.colorScheme)

  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariableResolver} defaultColorScheme={colorScheme} {...props}>
      <Notifications position="bottom-center" />
      <NavigationProgress />
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  )
}
