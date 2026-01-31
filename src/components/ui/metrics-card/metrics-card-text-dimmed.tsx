import { type ElementProps, Text, type TextProps } from "@mantine/core"

export type MetricsCardTextDimmedProps = Omit<TextProps, "c" | "fz"> & ElementProps<"p", keyof TextProps>

export function MetricsCardTextDimmed(props: MetricsCardTextDimmedProps) {
  return <Text c="dimmed" fz="sm" {...props} />
}
