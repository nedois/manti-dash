import { Badge, Button, Divider, Flex, Stack, Text } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { Group } from "@/components/ui/group"
import { Icon } from "@/components/ui/icon"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { Title } from "@/components/ui/title"

const techs = ["TanStack Router", "Mantine", "Framer Motion"]

const metrics = [
  { label: "Downloads", value: "10K+" },
  { label: "Happy Customers", value: "500+" },
  { label: "Average Rating", value: "4.9" },
  { label: "Support", value: "24/7" },
]

export function Hero() {
  return (
    <MotionViewport>
      <Flex direction="column" w="100%" ta="center" py="4rem" mx="auto" maw={896}>
        <Flex component={Stack} gap="xl" align="center">
          <Badge
            component={motion.div}
            variants={varFade("inDown")}
            fz="xs"
            fw={600}
            size="xl"
            variant="light"
            leftSection={<Icon icon="lucide:sparkles" />}
          >
            New: Dark mode & 20+ components added
          </Badge>

          <Title
            component={motion.h1}
            variants={varFade("inDown")}
            transition={{ delay: 0.1 }}
            order={1}
            textWrap="balance"
          >
            The Ultimate
            {" "}
            <Text inherit span variant="gradient" gradient={{ from: "primary", to: "purple", deg: 90 }}>
              Dashboard Template
            </Text>
            {" "}
            for Modern Apps
          </Title>

          <Group wrap="wrap" component={motion.div} variants={varFade("inDown")} transition={{ delay: 0.15 }}>
            {techs.map(tech => (
              <Badge key={tech} fz="xs" size="xl" variant="ghost">
                {tech}
              </Badge>
            ))}
          </Group>

          <Text
            component={motion.p}
            variants={varFade("inDown")}
            transition={{ delay: 0.25 }}
            maw={672}
            size="xl"
            c="dimmed"
          >
            Build stunning admin panels, SaaS dashboards, and internal tools in minutes. Powered by TanStack
            Start, Mantine, and Framer Motion.
          </Text>

          <Group
            component={motion.div}
            variants={varFade("inDown")}
            transition={{ delay: 0.3 }}
            grow
            w="100%"
            maw={380}
          >
            <Button size="lg" rightSection={<Icon icon="lucide:arrow-right" />}>
              Get Started
            </Button>
            <Button component={Link} variant="default" size="lg" to="/dashboard">
              View Live Demo
            </Button>
          </Group>
        </Flex>

        <Divider w="100%" mt="4rem" mb="2rem" />

        <Group
          component={motion.div}
          variants={varFade("inDown")}
          transition={{ delay: 0.4 }}
          wrap="wrap"
          justify="space-between"
          w="100%"
          px="xl"
        >
          {metrics.map(metric => (
            <div key={metric.label}>
              <Text fz="1.8rem" fw="bold">
                {metric.value}
              </Text>
              <Text fz="sm" c="dimmed">
                {metric.label}
              </Text>
            </div>
          ))}
        </Group>
      </Flex>
    </MotionViewport>
  )
}
