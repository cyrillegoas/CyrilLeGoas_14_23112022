import React from 'react';
import { styled } from '../../stitches.config';

const StyledTd = styled('td', {
  py: '1.5em',
  px: '1em',
});

export function TableCell({ children }) {
  return <StyledTd>{children}</StyledTd>;
}
