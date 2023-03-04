import React from 'react';
import { styled } from '../../stitches.config';

const StyledTHead = styled('thead', {
  fontSize: '$fontSizes$textTableHeader',
  color: '$colors$textOnLight',
  textAlign: 'left',
});

export function TableHead({ children }) {
  return <StyledTHead>{children}</StyledTHead>;
}
