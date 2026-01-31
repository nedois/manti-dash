import { type ElementProps, Text, type TextProps } from "@mantine/core"

export type MetricsCardTextEmphasisProps = Omit<TextProps, "fz" | "fw"> & ElementProps<"p", keyof TextProps>

export function MetricsCardTextEmphasis(props: MetricsCardTextEmphasisProps) {
  return <Text fz="lg" fw="bold" {...props} />
}
