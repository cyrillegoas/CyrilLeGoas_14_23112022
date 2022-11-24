import React from 'react';
import { styled } from '../../stitches.config';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';

const StyledWrapper = styled('div', {
  background: '$colors$primary',
});

const StyledHeader = styled('header', {
  maxWidth: '$sizes$maxWidth',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  py: '1rem',
  borderBottom: '1px solid $colors$primaryLight',
  variants: {
    mediaQuery: {
      initial: { px: '$space$sideMargin' },
      sm: { px: '$space$sideMarginLarge' },
    },
  },
});

export function Header() {
  return (
    <StyledWrapper>
      <StyledHeader mediaQuery={{ '@initial': 'initial', '@sm': 'sm' }}>
        <Logo />
        <SearchBar />
      </StyledHeader>
    </StyledWrapper>
  );
}
