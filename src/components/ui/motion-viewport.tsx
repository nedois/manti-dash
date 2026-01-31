import { Box, type BoxProps } from "@mantine/core"
import { motion, type MotionProps } from "motion/react"
import { varContainer } from "@/animations/container"
import { useSmallerThan } from "@/hooks/use-smaller-than"

export interface MotionViewportProps extends Omit<BoxProps, "component">, Omit<MotionProps, "style"> {
  disableAnimate?: boolean
}

export function MotionViewport({ disableAnimate, viewport, ...props }: MotionViewportProps) {
  const matches = useSmallerThan("sm")

  const disabled = matches && disableAnimate

  const baseProps = disabled
    ? {}
    : {
        component: motion.div,
        initial: "initial",
        whileInView: "animate",
        variants: varContainer(),
        viewport: { once: true, amount: 0.3, ...viewport },
      }

  return <Box {...baseProps} {...props} />
}
