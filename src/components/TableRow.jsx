import React from 'react';
import { styled } from '../../stitches.config';

const StyledTr = styled('tr', {
  borderBottom: '$borderStyles$tableRow',
});

export function TableRow({ children }) {
  return <StyledTr>{children}</StyledTr>;
}
