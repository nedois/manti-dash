import { Container, rem } from "@mantine/core"

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem("200px"),
  xs: rem("300px"),
  sm: rem("400px"),
  md: rem("500px"),
  lg: rem("600px"),
  xl: rem("1400px"),
  xxl: rem("1600px"),
}

export default {
  Container: Container.extend({
    defaultProps: {
      size: "xl",
    },
    vars: (_, { size, fluid }) => ({
      root: {
        "--container-size": fluid
          ? "100%"
          : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
      },
    }),
  }),
}
