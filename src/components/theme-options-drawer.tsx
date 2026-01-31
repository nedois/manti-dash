import { Box, Drawer, type DrawerProps, type MantineColorScheme, Radio, SimpleGrid, Stack, Text, useMantineColorScheme, useMantineTheme } from "@mantine/core"
import { capitalize } from "es-toolkit/string"
import { Icon } from "@/components/ui/icon"
import { RadioCard } from "@/components/ui/radio-card"
import { useThemeStore } from "@/stories/theme-store"
import { type ThemeName, themes } from "@/theme"

type ThemeOptionsDrawerProps = Omit<DrawerProps, "children">

export function ThemeOptionsDrawer(props: ThemeOptionsDrawerProps) {
  const theme = useMantineTheme()
  const { setColorScheme } = useMantineColorScheme()
  const colorScheme = useThemeStore(state => state.colorScheme)
  const primaryColor = useThemeStore(state => state.primaryColor)
  const defaultRadius = useThemeStore(state => state.defaultRadius)
  const saveColorScheme = useThemeStore(state => state.setColorScheme)
  const setPrimaryColor = useThemeStore(state => state.setPrimaryColor)
  const setDefaultRadius = useThemeStore(state => state.setDefaultRadius)

  const handleColorSchemeChange = (newColorScheme: string) => {
    setColorScheme(newColorScheme as MantineColorScheme)
    saveColorScheme(newColorScheme as MantineColorScheme)
  }

  return (
    <Drawer position="right" size="lg" {...props}>
      <Stack gap="lg">
        <Stack gap="xs">
          <Text c="dimmed">Color scheme</Text>
          <Radio.Group value={colorScheme} onChange={handleColorSchemeChange}>
            <SimpleGrid cols={3}>
              <RadioCard indicator={<Icon icon="lucide:sun" />} value="light" label="Light" />
              <RadioCard indicator={<Icon icon="lucide:moon" />} value="dark" label="Dark" />
              <RadioCard indicator={<Icon icon="lucide:monitor-smartphone" />} value="auto" label="Auto" />
            </SimpleGrid>
          </Radio.Group>
        </Stack>

        <Stack gap="xs">
          <Text c="dimmed">Theme</Text>
          <Radio.Group value={primaryColor} onChange={value => setPrimaryColor(value as ThemeName)}>
            <SimpleGrid cols={4}>
              {Object.keys(themes).map(color => (
                <RadioCard
                  key={color}
                  value={color}
                  indicator={<Box w={12} h={12} bg={color} bdrs="xl" style={{ flexShrink: 0 }} />}
                  label={capitalize(color)}
                />
              ),
              )}
            </SimpleGrid>
          </Radio.Group>
        </Stack>

        <Stack gap="xs">
          <Text c="dimmed">Default radius</Text>
          <Radio.Group value={String(defaultRadius)} onChange={setDefaultRadius}>
            <SimpleGrid cols={5}>
              {Object.keys(theme.radius).map(radius => (
                <RadioCard key={radius} value={radius} label={radius} />
              ))}
            </SimpleGrid>
          </Radio.Group>
        </Stack>
      </Stack>
    </Drawer>
  )
}
