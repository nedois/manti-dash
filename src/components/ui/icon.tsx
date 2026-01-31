import { Icon as IconifyIcon, type IconProps as IconifyIconProps } from "@iconify/react"
import { Box, type BoxProps } from "@mantine/core"

type IconProps = IconifyIconProps & BoxProps

export function Icon(props: IconProps) {
  return <Box component={IconifyIcon} fz="inherit" c="inherit" {...props} />
}
