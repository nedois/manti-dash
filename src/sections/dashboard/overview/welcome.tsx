import { Text } from "@mantine/core"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { PageHeader } from "@/components/ui/page-header"

export function Welcome() {
  return (
    <MotionViewport>
      <motion.div variants={varFade("inUp")}>
        <PageHeader title="Good evening, John! 👋" mb="xs" />
        <Text c="dimmed" fz="md">
          Here's what's happening with your business today.
        </Text>
      </motion.div>
    </MotionViewport>
  )
}
