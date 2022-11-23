import { globalCss } from '../../stitches.config';

export const globalStyle = globalCss({
  '*, *::before, *::after': { 'box-sizing': 'border-box' },
  '*': { margin: 0 },
  'html, body': { height: '100%' },
  'img, picture, video, canvas, svg': {
    display: 'block',
    'max-width': '100%',
  },
  'input, button, textarea, select': { font: 'inherit' },
  'p, h1, h2, h3, h4, h5, h6': { 'overflow-wrap': 'break-word' },
  body: {
    color: '$colors$text',
    backgroundColor: '$colors$background',
    'line-height': '1.5',
    '-webkit-font-smoothing': 'antialiased',
  },
  '#root': {
    margin: 'auto',
    minHeight: '100vh',
    isolation: 'isolate',
    maxWidth: '$sizes$maxWidth',
  },
});
