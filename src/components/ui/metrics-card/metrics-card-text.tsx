import type { ReactNode } from "react"
import { Text, type TextProps } from "@mantine/core"

export interface MetricsCardTextProps extends TextProps {
  children?: ReactNode
}

export function MetricsCardText(props: MetricsCardTextProps) {
  return <Text c="dimmed" fz="sm" {...props} />
}
