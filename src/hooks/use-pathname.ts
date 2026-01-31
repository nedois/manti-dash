import { useLocation } from "@tanstack/react-router"

export function usePathname() {
  const location = useLocation()
  return location.pathname
}
