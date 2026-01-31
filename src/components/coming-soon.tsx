import { alpha, Button, Card, Flex, type FlexProps, Text } from "@mantine/core"
import { motion } from "motion/react"
import { varFade, varScale } from "@/animations"
import { Group } from "@/components/ui/group"
import { Icon } from "@/components/ui/icon"
import { MotionViewport } from "@/components/ui/motion-viewport"
import { Title } from "@/components/ui/title"

interface ComingSoonProps extends FlexProps {
  description: string
}

export function ComingSoon({ description, ...props }: ComingSoonProps) {
  return (
    <MotionViewport>
      <Flex
        component={motion.div}
        variants={varFade("inDown")}
        maw={448}
        direction="column"
        justify="center"
        align="center"
        {...props}
      >
        <Flex
          component={motion.div}
          variants={varScale("in", { scale: 0.8 })}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          h={96}
          w={96}
          justify="center"
          align="center"
          bdrs="lg"
          mb="xl"
          bg={alpha("var(--mantine-color-primary-filled)", 0.1)}
        >
          <Icon icon="lucide:construction" fz="3rem" c="primary" />
        </Flex>

        <Title component={motion.h3} variants={varFade("in")} transition={{ delay: 0.3 }} order={3} ta="center" mb="sm">
          Coming Soon
        </Title>
        <Text component={motion.p} variants={varFade("in")} transition={{ delay: 0.4 }} ta="center" c="dimmed">
          {description}
          {" "}
          We're working hard to bring you this feature.
        </Text>

        <Group component={motion.div} variants={varFade("in")} transition={{ delay: 0.5 }} my="xl">
          <Button variant="default" leftSection={<Icon icon="lucide:arrow-left" />}>
            Back to Dashboard
          </Button>
          <Button leftSection={<Icon icon="lucide:sparkles" />}>Explore Docs</Button>
        </Group>

        <Card
          component={motion.div}
          variants={varFade("in")}
          transition={{ delay: 0.6 }}
          bg="var(--mantine-color-default-hover)"
        >
          <Group wrap="nowrap" fz="sm" c="dimmed">
            <Icon icon="lucide:sparkles" c="primary" />
            Pro tip: Check out our documentation for integration guides
          </Group>
        </Card>
      </Flex>
    </MotionViewport>
  )
}
