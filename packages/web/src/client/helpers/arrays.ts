export const findLastNonNullValue = <TValue>(
  items: Array<TValue | null | undefined>,
  currentIndex: number
): TValue => {
  const sliced = items.slice(0, currentIndex)
  return (
    sliced.filter((val) => val !== null && val !== undefined) as TValue[]
  ).pop() as TValue
}
