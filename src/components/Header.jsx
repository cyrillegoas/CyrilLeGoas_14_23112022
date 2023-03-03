import React from 'react';
import { styled } from '../../stitches.config';
import { Logo } from './Logo';

const HeaderWrapper = styled('div', {
  maxWidth: '$sizes$maxWidth',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',
});

const StyledHeader = styled('header', {
  background: '$colors$primary',
  py: '1rem',
  px: '2rem',
});

export function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    </StyledHeader>
  );
}
