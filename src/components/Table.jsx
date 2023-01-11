import React from 'react';
import { styled } from '../../stitches.config';

const StyledTable = styled('table', {
  borderSpacing: '0',
  borderCollapse: 'collapse',
  fontSize: '$fontSizes$text',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',
  lineHeight: '1',
  width: '100%',
});

export function Table({ children }) {
  return <StyledTable>{children}</StyledTable>;
}
