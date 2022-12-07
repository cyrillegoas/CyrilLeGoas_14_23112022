import React from 'react';
import { styled } from '../../stitches.config';

const StyledTd = styled('td', {
  fontWeight: '$fontWeights$light',
  py: '1em',
  px: '1em',
  '&:first-of-type': {
    paddingLeft: '2rem',
  },
});

export function TableCell({ children }) {
  return <StyledTd>{children}</StyledTd>;
}
