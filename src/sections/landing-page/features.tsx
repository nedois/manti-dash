import { Box, Center, Container, Paper, SimpleGrid, Text } from "@mantine/core"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { Icon } from "@/components/ui/icon"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { Title } from "@/components/ui/title"

const features = [
  {
    icon: "lucide:palette",
    title: "Mantine UI",
    description:
      "Beautiful, accessible components from Mantine. Fully customizable with a rich ecosystem of hooks and utilities.",
  },
  {
    icon: "lucide:code-xml",
    title: "TanStack",
    description: "Built with TanStack router for optimal performance, SSR, and modern React patterns.",
  },
  {
    icon: "lucide:zap",
    title: "Framer Motion",
    description: "Fluid animations and micro-interactions powered by Framer Motion for a polished user experience.",
  },
  {
    icon: "lucide:moon",
    title: "Dark Mode",
    description: "Built-in dark mode support with seamless theme switching and persistent preferences.",
  },
  {
    icon: "lucide:smartphone",
    title: "Fully Responsive",
    description: "Looks great on any device. Mobile-first design with breakpoints for all screen sizes.",
  },
  {
    icon: "lucide:shield",
    title: "Production Ready",
    description: "Battle-tested components with TypeScript, proper error handling, and edge case coverage.",
  },
]

export function Features() {
  return (
    <MotionViewport>
      <Box py="5rem" bg="var(--mantine-color-default)">
        <Container>
          <Title id="features" component={motion.h2} variants={varFade("inDown")} order={2} ta="center" mb="md">
            Everything you need to build faster
          </Title>
          <Text component={motion.p} variants={varFade("inDown")} transition={{ delay: 0.1 }} ta="center" c="dimmed">
            Packed with features that help you ship professional dashboards in record time.
          </Text>

          <SimpleGrid mt="4rem" cols={{ base: 1, md: 2, lg: 3 }}>
            {features.map((feature, index) => (
              <Paper
                key={feature.title}
                component={motion.div}
                variants={varFade("inDown")}
                transition={{ delay: index * 0.1 }}
                p="lg"
              >
                <Center w={48} h={48} bg="primary.0" mb="md" bdrs="md">
                  <Icon icon={feature.icon} c="primary.5" w={24} h={24} />
                </Center>
                <Text fw={600} mb="sm">
                  {feature.title}
                </Text>
                <Text c="dimmed">{feature.description}</Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </MotionViewport>
  )
}
