export const isStringGuard = (value: unknown): value is string =>
  typeof value === 'string'

export const isArrayGuard = (value: unknown): value is unknown[] =>
  Array.isArray(value)
