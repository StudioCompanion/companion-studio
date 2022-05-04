import { CSS } from 'styles/stitches.config'

export {}

declare global {
  type StaticImageData = {
    src: string
    height: number
    width: number
    blurDataURL?: string
  }

  namespace JSX {
    /**
     * Do we need to modify `LibraryManagedAttributes` too,
     * to make `className` props optional when `css` props is specified?
     */

    interface IntrinsicAttributes {
      css?: CSS
    }
  }
}
