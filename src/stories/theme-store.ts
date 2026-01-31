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

function patchMantineTheme(options: PatchThemeOptions) {
  const newTheme: MantineThemeOverride = { ...options }

  if (options.primaryColor) {
    const { primaryShade, secondaryColor } = themes[options.primaryColor]

    newTheme.primaryShade = primaryShade
    newTheme.colors = {
      primary: defaultTheme.colors[options.primaryColor],
      secondary: defaultTheme.colors[secondaryColor],
    }
  }

  return mergeMantineTheme(defaultTheme, newTheme)
}

export const useThemeStore = create<ThemeStoreState>()(
  persist(
    set => ({
      colorScheme: "light" as const,
      theme: defaultTheme,
      primaryColor: "orange",
      defaultRadius: defaultTheme.defaultRadius,
      setDefaultRadius: defaultRadius => set({ defaultRadius, theme: patchMantineTheme({ defaultRadius }) }),
      setColorScheme: colorScheme => set({ colorScheme }),
      setPrimaryColor: primaryColor => set({ primaryColor, theme: patchMantineTheme({ primaryColor }) }),
    }),
    {
      name: "theme-storage",
      partialize: state => pick(state, ["primaryColor", "defaultRadius", "colorScheme"]),
      merge: (persisted: any, current) => ({
        ...merge(current, persisted),
        theme: patchMantineTheme({
          primaryColor: persisted.primaryColor,
          defaultRadius: persisted.defaultRadius,
        }),
      }),
    },
  ),
)
