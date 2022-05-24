import { ComponentProps, JSXElementConstructor } from 'react'

export type NonNullSkipArray<T> = NonNullable<T> extends infer T1
  ? T1 extends unknown[]
    ? NonNullable<T1[number]>
    : T1
  : never

export type PickType<TObject, TKey extends keyof TObject> = {
  [P in TKey]: TObject[P]
}[TKey]

export type StoryFixtures<
  TComponent extends
    | keyof JSX.IntrinsicElements
    | JSXElementConstructor<ComponentProps<TComponent>>
> = Record<string, ComponentProps<TComponent>>
