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
      background: '#150E1B',
      text: '#FFFFFF',
      accent: '#FDCA40',
      accentLight: '#FEE08A',
    },
    fonts: {
      logo: "'Audiowide', cursive",
      text: "'Work Sans', monospace",
    },
    fontSizes: {},
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
      logo: '2rem',
      minWidth: '320px',
      maxWidth: '1440px',
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
  },
});
