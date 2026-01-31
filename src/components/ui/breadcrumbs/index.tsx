import { Breadcrumbs as MantineBreadcrumbs, type BreadcrumbsProps as MantineBreadcrumbsProps } from "@mantine/core"
import { type BreadcrumbItemProps, BreadcrumbsItem } from "./breadcrumbs-item"
import { BreadcrumbsMenu } from "./breadcrumbs-menu"

export interface BreadcrumbsProps extends Omit<MantineBreadcrumbsProps, "children"> {
  items: Array<BreadcrumbItemProps>
  maxItems?: number
}

export function Breadcrumbs({ items, maxItems, ...props }: BreadcrumbsProps) {
  const { start: startItems, middle: middleItems, end: endItems } = splitBreadcrumbs(items, maxItems)

  return (
    <MantineBreadcrumbs {...props}>
      {startItems.map(item => (
        <BreadcrumbsItem key={item.label} to={item.to} label={item.label} />
      ))}
      {middleItems.length > 0 && <BreadcrumbsMenu items={middleItems} />}
      {endItems.map(item => (
        <BreadcrumbsItem key={item.label} to={item.to} label={item.label} />
      ))}
    </MantineBreadcrumbs>
  )
}

/**
 * Split items into start / middle (collapsed) / end slices.
 *
 * Behavior:
 * - If maxItems is not provided or items.length <= maxItems => start = items, middle = [], end = []
 * - Otherwise we reserve 1 visible slot for the overflow control (the collapsed "middle").
 *   That means startCount + endCount = maxItems - 1.
 * - startCount is ceil((maxItems - 1) / 2), endCount is floor((maxItems - 1) / 2).
 */
function splitBreadcrumbs<T>(items: Array<T>, maxItems?: number): { start: Array<T>, middle: Array<T>, end: Array<T> } {
  const n = items.length

  if (!maxItems || n <= maxItems) {
    return {
      start: items,
      middle: [] as Array<T>,
      end: [] as Array<T>,
    }
  }

  const visibleWithoutOverflow = Math.max(0, maxItems - 1)
  const startCount = Math.ceil(visibleWithoutOverflow / 2)
  const endCount = Math.floor(visibleWithoutOverflow / 2)

  const start = items.slice(0, startCount)
  const end = endCount > 0 ? items.slice(n - endCount) : []
  const middle = items.slice(startCount, n - endCount)

  return { start, middle, end }
}
