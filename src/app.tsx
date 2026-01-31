import { RouterProvider } from "./providers/router-provider"
import { ThemeProvider } from "./providers/theme-provider"

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  )
}
