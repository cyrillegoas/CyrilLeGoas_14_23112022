import React from 'react';
import { styled } from '../../stitches.config';

const StyledTBody = styled('tbody', {
  color: '$colors$textOnWhite',
  '& tr:last-of-type': {
    border: 'none',
  },
});

export function Tablebody({ children }) {
  return <StyledTBody>{children}</StyledTBody>;
}
