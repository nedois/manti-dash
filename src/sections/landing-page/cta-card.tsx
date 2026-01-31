import { Box, Button, Container, Group, Text } from "@mantine/core"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { Icon } from "@/components/ui/icon"
import { MotionViewport } from "@/components/ui/motion-viewport"

export function CtaCard() {
  return (
    <MotionViewport>
      <Container>
        <Box
          bg="primary"
          ta="center"
          p="4rem"
          bdrs="lg"
          c="var(--mantine-primary-color-contrast)"
          component={motion.div}
          variants={varFade("inDown")}
        >
          <Text fz="h2" fw="bold" mb="md">
            Ready to build something amazing?
          </Text>
          <Text mb="xl">Join thousands of developers who ship faster with MantiDash.</Text>

          <Group justify="center">
            <Button size="lg" variant="default" rightSection={<Icon icon="lucide:arrow-right" />}>
              Get MantiDash Now
            </Button>
            <Button size="lg" variant="subtle" c="var(--mantine-primary-color-contrast)">
              Try Demo First
            </Button>
          </Group>
        </Box>
      </Container>
    </MotionViewport>
  )
}
