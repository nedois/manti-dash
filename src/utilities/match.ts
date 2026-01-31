/**
 * A utility function that mimics a switch-case statement.
 *
 * @example
 * ```ts
 * const result = match('default',
 *   [condition1, 'case 1'],
 *   [condition2, 'case 2'],
 *   [condition3, 'case 3']
 * );
 * ```
 *
 * @param defaultValue The value to return if no conditions are met.
 * @param cases An array of tuples where each tuple contains a boolean condition and a corresponding value.
 * @returns The value corresponding to the first true condition, or the default value if none are true.
 */
export function match<T>(defaultValue: T, ...cases: Array<[boolean, T]>): T {
  for (const [condition, value] of cases) {
    if (condition) {
      return value
    }
  }
  return defaultValue
}
