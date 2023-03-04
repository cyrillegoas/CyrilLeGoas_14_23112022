import React from 'react';
import { styled } from '../../stitches.config';
import { Sort } from './tableControls/Sort';

const StyledTh = styled('th', {
  fontWeight: '$fontWeights$medium',
  py: '1em',
  px: '1em',
});
const StyledCellWrapper = styled('div', {
  width: 'max-content',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
});

export function TableHeaderCell({ sortToggleFn, isSorted, children }) {
  return (
    <StyledTh>
      <StyledCellWrapper>
        {children}
        <Sort sortToggleFn={sortToggleFn} isSorted={isSorted} />
      </StyledCellWrapper>
    </StyledTh>
  );
}
