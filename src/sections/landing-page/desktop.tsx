import { Box, Button, Card, Flex, Group, LoadingOverlay, Text } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { Link } from "@tanstack/react-router"
import { motion } from "motion/react"
import { varFade } from "@/animations"
import { Container } from "@/components/ui/container"
import { Icon } from "@/components/ui/icon"
import { MotionViewport } from "@/components/ui/motion-viewport"

export function Desktop() {
  const { hovered, ref } = useHover()

  return (
    <MotionViewport>
      <Container pb="4rem">
        <Card
          component={motion.div}
          variants={varFade("inDown", { distance: 40 })}
          transition={{ delay: 0.5, duration: 0.3 }}
          radius="lg"
          shadow="xl"
        >
          <Card.Section withBorder>
            <Flex pos="relative" align="center" justify="center" h={49}>
              <Group gap="0.25rem" pos="absolute" left="1rem">
                <Icon icon="material-symbols:circle" fz="0.8rem" c="#ef434399" />
                <Icon icon="material-symbols:circle" fz="0.8rem" c="#f4c02599" />
                <Icon icon="material-symbols:circle" fz="0.8rem" c="#22c55e99" />
              </Group>

              <Text fz="xs" c="dimmed">
                https://mantidash.nedois.com/dasboard/overview
              </Text>
            </Flex>
          </Card.Section>

          <Card.Section ref={ref} h={720} pos="relative">
            <LoadingOverlay
              visible={hovered}
              overlayProps={{ blur: 2 }}
              loaderProps={{
                children: (
                  <Button component={Link} to="/dashboard/overview">
                    Live Demo
                  </Button>
                ),
              }}
            />
            <Box pos="absolute" inset="0" style={{ zIndex: 1 }} />
            <Box bd="none" h="100%" w="100%" component="iframe" title="Embedded" src="/dashboard/overview" />
          </Card.Section>
        </Card>
      </Container>
    </MotionViewport>
  )
}
