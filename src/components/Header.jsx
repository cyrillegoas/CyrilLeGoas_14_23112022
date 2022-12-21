import React from 'react';
import { styled } from '../../stitches.config';
import { Logo } from './Logo';

const StyledHeader = styled('header', {
  background: '$colors$primary',
  py: '1rem',
  px: '2rem',
  display: 'flex',
  flexDirection: 'column',
});

export function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}
