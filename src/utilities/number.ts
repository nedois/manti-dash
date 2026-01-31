interface CommonFormatOptions {
  locale?: string
  suffix?: string
  prefix?: string
}

const defaultFormatOptions: CommonFormatOptions = {
  suffix: "",
  prefix: "",
}

export function formatCurrency(
  value: number,
  options: CommonFormatOptions & Omit<Intl.NumberFormatOptions, "style"> = {},
) {
  const { prefix, suffix, locale, ...rest } = { ...defaultFormatOptions, ...options }
  const formatted = new Intl.NumberFormat(options.locale, { style: "currency", currency: "USD", ...rest }).format(value)
  return `${prefix}${formatted}${suffix}`
}

export function formatNumber(value: number, options: CommonFormatOptions & Intl.NumberFormatOptions = {}) {
  const { prefix, suffix, locale, ...rest } = { ...defaultFormatOptions, ...options }
  const formatted = new Intl.NumberFormat(locale, rest).format(value)
  return `${prefix}${formatted}${suffix}`
}

export function formatInt(
  value: number,
  options: CommonFormatOptions & Omit<Intl.NumberFormatOptions, "maximumFractionDigits"> = {},
) {
  const { prefix, suffix, locale, ...rest } = { ...defaultFormatOptions, ...options }
  const formatted = new Intl.NumberFormat(locale, { maximumFractionDigits: 0, ...rest }).format(Math.round(value))
  return `${prefix}${formatted}${suffix}`
}

export function formatPercent(
  value: number,
  options: CommonFormatOptions & Omit<Intl.NumberFormatOptions, "style"> = {},
) {
  const { prefix, suffix, locale, ...rest } = { ...defaultFormatOptions, ...options }
  const formatted = new Intl.NumberFormat(locale, { style: "percent", ...rest }).format(value)
  return `${prefix}${formatted}${suffix}`
}
