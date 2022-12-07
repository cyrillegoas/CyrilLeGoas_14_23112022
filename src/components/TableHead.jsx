import React from 'react';
import { styled } from '../../stitches.config';

const StyledTHead = styled('thead', {
  color: '$colors$tableHeader',
  textAlign: 'left',
});

export function TableHead({ children }) {
  return <StyledTHead>{children}</StyledTHead>;
}
