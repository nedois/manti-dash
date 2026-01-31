import { type MantineColorScheme, type MantineRadius, type MantineTheme, type MantineThemeOverride, mergeMantineTheme } from "@mantine/core"
import { merge } from "es-toolkit/compat"
import { pick } from "es-toolkit/object"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import defaultTheme, { type ThemeName, themes } from "@/theme"

interface ThemeStoreState {
  theme: MantineTheme
  defaultRadius: MantineRadius
  colorScheme: MantineColorScheme
  primaryColor: ThemeName
  setDefaultRadius: (radius: MantineRadius) => void
  setColorScheme: (colorScheme: MantineColorScheme) => void
  setPrimaryColor: (color: ThemeName) => void
}

interface PatchThemeOptions {
  primaryColor?: keyof typeof themes
  defaultRadius?: MantineRadius
}

function patchMantineTheme(theme: MantineTheme, options: PatchThemeOptions) {
  const newTheme: MantineThemeOverride = { ...options }

  if (options.primaryColor) {
    const { primaryShade, secondaryColor } = themes[options.primaryColor]

    newTheme.primaryShade = primaryShade
    newTheme.colors = {
      primary: theme.colors[options.primaryColor],
      secondary: theme.colors[secondaryColor],
    }
  }

  return mergeMantineTheme(theme, newTheme)
}

export const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set, get) => ({
      colorScheme: "light" as const,
      theme: defaultTheme,
      primaryColor: defaultTheme.primaryColor as ThemeName,
      defaultRadius: defaultTheme.defaultRadius,
      setDefaultRadius: defaultRadius => set({ defaultRadius, theme: patchMantineTheme(get().theme, { defaultRadius }) }),
      setColorScheme: colorScheme => set({ colorScheme }),
      setPrimaryColor: primaryColor => set({ primaryColor, theme: patchMantineTheme(get().theme, { primaryColor }) }),
    }),
    {
      name: "theme-storage",
      partialize: state => pick(state, ["primaryColor", "defaultRadius", "colorScheme"]),
      merge: (persisted: any, current) => ({
        ...merge(current, persisted),
        theme: patchMantineTheme(defaultTheme, {
          primaryColor: persisted.primaryColor,
          defaultRadius: persisted.defaultRadius,
        }),
      }),
    },
  ),
)
