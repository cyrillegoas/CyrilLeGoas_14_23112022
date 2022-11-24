import React from 'react';
import { styled } from '../../stitches.config';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';

const StyledHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  py: '1rem',
  borderBottom: '1px solid $colors$backgroundLight',
  variants: {
    mediaQuery: {
      initial: { px: '$space$sideMargin' },
      sm: { px: '$space$sideMarginLarge' },
    },
  },
});

export function Header() {
  return (
    <StyledHeader mediaQuery={{ '@initial': 'initial', '@sm': 'sm' }}>
      <Logo />
      <SearchBar />
    </StyledHeader>
  );
}
