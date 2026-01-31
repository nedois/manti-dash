import type { ReactNode } from "react"
import { Text, type TextProps } from "@mantine/core"
import classes from "./sidebar-section-title.module.css"

export type SidebarSectionTitleProps = TextProps & {
  children: ReactNode
}

export function SidebarSectionTitle(props: SidebarSectionTitleProps) {
  return <Text className={classes.title} pl="md" c="dimmed" fw="inherit" fz="sm" {...props} />
}
