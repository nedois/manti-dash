import { Group, SimpleGrid, type StackProps, Text } from "@mantine/core"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { Icon } from "@/components/ui/icon"
import { MetricsCard } from "@/components/ui/metrics-card"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { Stack } from "@/components/ui/stack"
import { formatInt } from "@/utilities/number"

const metrics = [
  { icon: "lucide:star", title: "Repository stars", value: 44012 },
  { icon: "lucide:git-graph", title: "Commits", value: 20450 },
  { icon: "lucide:git-fork", title: "Forks", value: 12450 },
  { icon: "lucide:git-pull-request-arrow", title: "Pull Requests", value: 142 },
]

export function MetricsAndIcons(props: StackProps) {
  return (
    <MotionViewport>
      <Stack component={motion.div} variants={varFade("inDown")} gap="sm" {...props}>
        <Text>Metrics + Icon</Text>

        <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }}>
          {metrics.map(({ icon, title, value }) => (
            <MetricsCard key={title}>
              <Group>
                <Icon icon={icon} fz="2xl" />
                <div>
                  <MetricsCard.TextDimmed>{title}</MetricsCard.TextDimmed>
                  <MetricsCard.TextEmphasis>{formatInt(value)}</MetricsCard.TextEmphasis>
                </div>
              </Group>
            </MetricsCard>
          ))}
        </SimpleGrid>
      </Stack>
    </MotionViewport>
  )
}
