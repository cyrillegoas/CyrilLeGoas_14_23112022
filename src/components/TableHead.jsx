import React from 'react';
import { styled } from '../../stitches.config';

const StyledTHead = styled('thead', {
  fontSize: '$fontSizes$textTableHeader',
  color: '$colors$grey',
  textAlign: 'left',
});

export function TableHead({ children }) {
  return <StyledTHead>{children}</StyledTHead>;
}
