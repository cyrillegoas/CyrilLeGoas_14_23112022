import { globalCss } from '../../stitches.config';

export const globalStyle = globalCss({
  '*, *::before, *::after': { boxSizing: 'border-box' },
  '*': { margin: 0 },
  'html, body': { height: '100%' },
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  'input, button, textarea, select': { font: 'inherit' },
  'p, h1, h2, h3, h4, h5, h6': { overflowWrap: 'break-word' },
  body: {
    color: '$colors$text',
    backgroundColor: '$colors$grey',
    fontFamily: '$fonts$text',
    lineHeight: '1.5',
    '-webkit-font-smoothing': 'antialiased',
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    isolation: 'isolate',
  },
});
