import type { ReactNode } from "react"
import { CardSection, type CardSectionProps, Group, Text, Title } from "@mantine/core"

export interface CardTitleProps extends Omit<CardSectionProps, "size" | "c" | "fw" | "tt"> {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

export function CardTitle({ title, description, children, withBorder = true, ...props }: CardTitleProps) {
  return (
    <CardSection py="md" withBorder={withBorder} inheritPadding {...props}>
      <Group justify="space-between" wrap="nowrap">
        <div>
          <Title order={5}>{title}</Title>
          {description && (
            <Text size="sm" c="dimmed" style={{ textWrap: "pretty" }}>
              {description}
            </Text>
          )}
        </div>
        <div style={{ flexShrink: 0 }}>
          {children}
        </div>
      </Group>
    </CardSection>
  )
}
