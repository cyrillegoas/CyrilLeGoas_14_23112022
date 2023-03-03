import React from 'react';
import { SearchBar } from '../SearchBar';
import { styled } from '../../../stitches.config';

const StyledWrapper = styled('div', {
  display: 'flex',
  px: '1em',
  paddingTop: '0.5em',
});

export function Filter({ setFilterFn }) {
  return (
    <StyledWrapper>
      <SearchBar submitFn={setFilterFn} />
    </StyledWrapper>
  );
}
