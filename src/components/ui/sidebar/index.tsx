import { Divider, Stack, type StackProps } from "@mantine/core"
import { SidebarItem, type SidebarItemProps } from "./sidebar-item"
import { SidebarSectionTitle } from "./sidebar-section-title"

export interface SidebarSectionProps {
  header: string
  items: Array<SidebarItemProps>
}

export interface SidebarProps extends StackProps {
  withHeader?: boolean
  withDivider?: boolean
  sections: Array<SidebarSectionProps>
}

export function Sidebar({ gap = "md", sections, withHeader = true, withDivider, ...props }: SidebarProps) {
  return (
    <Stack {...props} gap={gap}>
      {sections.map((section, index) => (
        <div key={section.header || index}>
          {index !== 0 && withDivider && <Divider mb="lg" mx="md" />}
          {withHeader && <SidebarSectionTitle>{section.header}</SidebarSectionTitle>}

          {section.items.map(item => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      ))}
    </Stack>
  )
}
