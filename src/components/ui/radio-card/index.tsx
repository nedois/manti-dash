import type { ReactNode } from "react"
import { Group, type RadioCardProps as MantineRadioCardProps, Radio, Text } from "@mantine/core"
import clsx from "clsx"
import classes from "./radio-card.module.css"

export interface RadioCardProps extends Omit<MantineRadioCardProps, "children"> {
  label: ReactNode
  description?: string
  indicator?: ReactNode
}

export function RadioCard({ className, label, indicator, description, ...props }: RadioCardProps) {
  return (
    <Radio.Card className={clsx(classes.root, className)} {...props}>
      <Group gap="xs" wrap="nowrap" align="center">
        {indicator || <Radio.Indicator /> }
        <div>
          <Text className={classes.label}>{label}</Text>
          {description && <Text className={classes.description}>{description}</Text>}
        </div>
      </Group>
    </Radio.Card>
  )
}
