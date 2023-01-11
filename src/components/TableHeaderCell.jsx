import React from 'react';
import { styled } from '../../stitches.config';

const StyledTh = styled('th', {
  fontWeight: '$fontWeights$medium',
  py: '1em',
  px: '1em',
});

export function TableHeaderCell({ children }) {
  return <StyledTh>{children}</StyledTh>;
}
