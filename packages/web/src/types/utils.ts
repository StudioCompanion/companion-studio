export type NonNullSkipArray<T> = NonNullable<T> extends infer T1
  ? T1 extends unknown[]
    ? NonNullable<T1[number]>
    : T1
  : never

export type PickType<TObject, TKey extends keyof TObject> = {
  [P in TKey]: TObject[P]
}[TKey]
