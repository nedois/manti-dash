import type { MantineThemeOverride } from "@mantine/core"
import anchor from "./anchor"
import appShell from "./app-shell"
import badge from "./badge"
import breadcrumbs from "./breadcrumbs"
import buttons from "./buttons"
import card from "./card"
import charts from "./charts"
import container from "./container"
import drawer from "./drawer"
import dropzone from "./dropzone"
import inputs from "./inputs"
import loadingOverlay from "./loading-overlay"
import menu from "./menu"
import navLink from "./nav-link"
import overlay from "./overlay"
import paper from "./paper"
import pill from "./pill"
import popover from "./popover"
import ringProgress from "./ring-progress"
import table from "./table"
import tabs from "./tabs"
import tooltip from "./tooltip"

export default {
  ...anchor,
  ...appShell,
  ...badge,
  ...breadcrumbs,
  ...buttons,
  ...card,
  ...charts,
  ...drawer,
  ...inputs,
  ...loadingOverlay,
  ...menu,
  ...ringProgress,
  ...table,
  ...tooltip,
  ...navLink,
  ...container,
  ...dropzone,
  ...popover,
  ...tabs,
  ...overlay,
  ...paper,
  ...pill,
} as MantineThemeOverride["components"]
