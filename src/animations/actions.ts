import type { Transition } from "motion/react"

export function varHover(value = 1.09) {
  return {
    scale: value,
  }
}

export function varTap(value = 0.9) {
  return {
    scale: value,
  }
}

export function transitionTap(props?: Transition): Transition {
  return {
    type: "spring",
    stiffness: 400,
    damping: 18,
    ...props,
  }
}

export function transitionHover(props?: Transition): Transition {
  return {
    duration: 0.32,
    ease: [0.43, 0.13, 0.23, 0.96],
    ...props,
  }
}
