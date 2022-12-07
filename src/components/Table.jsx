import React from 'react';
import { styled } from '../../stitches.config';

const StyledTable = styled('table', {
  borderSpacing: '0',
  borderCollapse: 'collapse',
  fontSize: '$fontSizes$text',
  lineHeight: '1',
});

export function Table({ children }) {
  return <StyledTable>{children}</StyledTable>;
}
