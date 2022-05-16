import * as Stitches from '@stitches/react'

interface AspectRatioProps {
  w: number
  h?: number
}

export enum Widths {
  SmallTablet = 400,
  Tablet = 768,
  Desktop = 1024,
  LargeDesktop = 1440,
}

const { styled, globalCss, getCssText, config, keyframes, reset } =
  Stitches.createStitches({
    theme: {
      colors: {
        white100: 'rgba(255,255,255,1)',
        white50: 'rgba(255, 255, 255, 0.5)',
        white25: 'rgba(255, 255, 255, 0.25)',
        black100: '#1B1C1D',
        black50: '#8D8D8E',
        black25: '#C6C6C6',
        blue100: '#0037B0',
        blue50: '#809BD8',
        blue25: '#BFCDEB',
        orange100: '#EF7F3A',
        orange50: '#F7BF9D',
        orange25: '#FBDFCE',
        green100: '#00B66B',
        green50: '#80DBB5',
        green25: '#BFEDDA',
        cream100: '#F7EEE2',
        cream50: '#FBF7F1',
        cream25: '#FDFBF8',
        grey100: '#E5E5EB',
        grey50: '#F2F2F5',
        grey25: '#F9F9FA',
      },
      sizes: {
        smallTablet: `${Widths.SmallTablet / 10}rem`,
        tablet: `${Widths.Tablet / 10}rem`,
        desktop: `${Widths.Desktop / 10}rem`,
        largeDesktop: `${Widths.LargeDesktop / 10}rem`,
        centeredParagraph: '65.3rem',
        documentWrapper: '80rem',
        footerWrapper: '45rem',
      },
      space: {
        xxxs: '0.4rem',
        xxs: '0.8rem',
        xs: '1.2rem',
        s: '1.6rem',
        m: '2rem',
        l: '2.4rem',
        xl: '3.2rem',
        xxl: '4rem',
      },
      radii: {
        wrapper: '0.8rem',
        wrapperLarge: '1.2rem',
        wrapperMobile: '0.4rem',
        videoDesktop: '0.4rem',
        videoMobile: '0.2rem',
        circle: '50%',
        pill: '50rem',
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
      },
      fontSizes: {
        XXXL: '5.8rem',
        XXL: '4.4rem',
        XL: '3.2rem',
        L: '2.6rem',
        M: '2rem',
        S: '1.7rem',
        XS: '1.2rem',
        XXS: '1rem',
      },
      lineHeights: {
        XXXL: '120%',
        XXL: '120%',
        XL: '120%',
        L: '130%',
        M: '130%',
        S: '130%',
        XS: '120%',
        XXS: '120%',
      },
      fontWeights: {
        regular: 400,
        bold: 700,
      },
    },
    media: {
      smallTabletUp: `(min-width: ${Widths.SmallTablet}px)`,
      tabletUp: `(min-width: ${Widths.Tablet}px)`,
      desktopUp: `(min-width: ${Widths.Desktop}px)`,
      largeDesktopUp: `(min-width: ${Widths.LargeDesktop}px)`,
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
      motion: '(prefers-reduced-motion: true)',
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
      aspect: ({ w = 0, h = 0 }: AspectRatioProps) => ({
        overflow: 'hidden',
        position: 'relative',

        '&:before': {
          display: 'block',
          content: '',
          width: '100%',
          paddingTop: `${h ? (h / w) * 100 : w}%`,
        },

        '& > *': {
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        },
      }),

      hover: (val: object) => ({
        '@media (hover:hover)': {
          '&:hover': {
            ...val,
          },
        },
      }),
    },
  })

type StitchesConfig = typeof config
type CSS = Stitches.CSS<StitchesConfig>
type ScaleValue<TValue> = Stitches.ScaleValue<TValue, StitchesConfig>

export type { StitchesConfig, CSS, ScaleValue }

export { styled, getCssText, globalCss, keyframes, reset }
