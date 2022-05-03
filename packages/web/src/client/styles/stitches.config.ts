import * as Stitches from '@stitches/react'

interface AspectRatioProps {
  w: number
  h?: number
}

const { styled, globalCss, getCssText, config, keyframes } =
  Stitches.createStitches({
    theme: {
      colors: {
        white: '#fff',
        lightGrey: '#f1f1f4',
        grey: '#e5e5eb',
        blue: '#0037B0',
        black: '#1E1C1C',
        black70: 'rgba(30, 28, 28, .7)',
      },
      sizes: {
        smallTablet: '40rem',
        tablet: '76.8rem',
        desktop: '102.4rem',
        largeDesktop: '144rem',
        centeredParagraph: '65.3rem',
      },
      space: {
        xxs: '0.4rem',
        xs: '1.2rem',
        s: '1.6rem',
        m: '2rem',
        l: '2.4rem',
        xl: '4rem',
        xxl: '6rem',
      },
      radii: {
        wrapper: '0.8rem',
        wrapperLarge: '1.2rem',
        wrapperMobile: '0.4rem',
        videoDesktop: '0.4rem',
        videoMobile: '0.2rem',
        circle: '50%',
      },
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        max: '999',
      },
      fonts: {
        apfel: '"Apfel Groteszk", -apple-system, system-ui, sans-serif',
        reckless: '"Reckless Neue", serif',
      },
      fontSizes: {
        h1: '4.8rem',
        h2: '4rem',
        h3: '3.2rem',
        h4: '2.6rem',
        h5: '2rem',
        h6: '1.6rem',
        body: '1.2rem',
      },
      lineHeights: {
        h1: '5.8rem',
        h2: '5rem',
        h3: '4.2rem',
        h4: '3.6rem',
        h5: '3rem',
        h6: '2.6rem',
        body: '2.2rem',
      },
      fontWeights: {
        regular: 400,
        medium: 500,
      },
    },
    media: {
      tabletUp: '(min-width: 768px)',
      desktopUp: '(min-width: 1024px)',
      largeDesktopUp: '(min-width: 1440px)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
      motion: '(prefers-reduced-motion)',
    },
    utils: {
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      debug: (value: Stitches.PropertyValue<'color'>) => ({
        border: `solid 1px ${value}`,
      }),
      // require unused variable to allow custom CSS type to be used
      visuallyHidden: (_val: string) => ({
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
      }),
      /**
       *  If h is omitted, w is expected to be the percentage value
       * for the aspect ratio
       */
      aspectRatio: ({ w = 0, h = 0 }: AspectRatioProps) => ({
        overflow: 'hidden',
        position: 'relative',

        '&:before': {
          display: 'block',
          content: '',
          width: '100%',
          paddingTop: `${h ? (h / w) * 100 : w}%`,
        },

        '& > *': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        },
      }),
    },
  })

type StitchesConfig = typeof config
type CSS = Stitches.CSS<StitchesConfig>
type ScaleValue<TValue> = Stitches.ScaleValue<TValue, StitchesConfig>

export type { StitchesConfig, CSS, ScaleValue }

export { styled, getCssText, globalCss, keyframes }
