import { Container, type ContainerProps, Flex, type FlexProps } from "@mantine/core"
import classes from "./fixed-main-header.module.css"

type FixedMainHeaderProps = ContainerProps & FlexProps

export function FixedMainHeader({ children, ...props }: FixedMainHeaderProps) {
  return (
    <header className={classes.root}>
      <Flex component={Container} h="100%" align="center" {...props}>
        {children}
      </Flex>
    </header>
  )
}
