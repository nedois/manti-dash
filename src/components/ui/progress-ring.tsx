import { alpha, parseThemeColor, RingProgress, type RingProgressProps, Text, useMantineTheme } from "@mantine/core"

type ProgressRingProps = RingProgressProps

function Label({ label }: Pick<ProgressRingProps, "label">) {
  const isTextLabel = ["string", "number"].includes(typeof label)

  if (isTextLabel) {
    return (
      <Text fw="bold" ta="center">
        {label}
      </Text>
    )
  }

  return label
}

export function ProgressRing({ label, rootColor, sections, ...props }: ProgressRingProps) {
  const theme = useMantineTheme()
  const parsedColor = parseThemeColor({ color: sections[0].color, theme })
  const fallbackRootColor = alpha(parsedColor.value, 0.1)

  return (
    <RingProgress
      sections={sections}
      rootColor={rootColor ?? fallbackRootColor}
      label={<Label label={label} />}
      {...props}
    />
  )
}
