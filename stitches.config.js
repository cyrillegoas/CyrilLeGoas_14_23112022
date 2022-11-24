import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#150E1B',
      primaryLight: '#3A3442',
      primaryLighter: '#655F6D',
      primaryDark: '#000000',
      secondary: '#FDCA40',
      secondaryLight: '#FFFD73',
      text: '#FFFFFF',
    },
    fonts: {
      logo: "'Audiowide', cursive",
      text: "'Work Sans', monospace",
    },
    fontSizes: {
      logo: '2rem',
    },
    fontWeights: {
      light: '400',
      medium: '500',
      bold: '600',
    },
    space: {
      sideMargin: '1rem',
      sideMarginLarge: '2rem',
    },
    sizes: {
      minWidth: '320px',
      maxWidth: '1440px',
    },
    radii: {
      default: '5px',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
  },
  utils: {
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    srOnly: () => ({
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0px',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0px',
    }),
  },
});
