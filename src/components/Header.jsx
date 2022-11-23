import React from 'react';
import { styled } from '../../stitches.config';
import { Logo } from './Logo';

const StyledHeader = styled('header', {
  py: '1rem',
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
    </StyledHeader>
  );
}
