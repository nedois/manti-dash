import type { ReactNode } from "react"
import type { BreadcrumbItemProps } from "@/components/ui/breadcrumbs/breadcrumbs-item"
import { type ElementProps, Group, type GroupProps, Title } from "@mantine/core"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

interface PageHeaderProps extends Omit<GroupProps, "title">, ElementProps<"header", keyof GroupProps> {
  title: ReactNode
  breadcrumbs?: Array<BreadcrumbItemProps>
}

export function PageHeader({ title, children, breadcrumbs, mb = "xl", ...props }: PageHeaderProps) {
  return (
    <Group component="header" justify="space-between" mb={mb} {...props}>
      <div>
        <Title order={2} fz="3xl">
          {title}
        </Title>
        {breadcrumbs && <Breadcrumbs mt="xs" items={breadcrumbs} />}
      </div>
      {children}
    </Group>
  )
}
