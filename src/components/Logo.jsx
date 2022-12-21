import React from 'react';
import { styled } from '../../stitches.config';

const StyledLink = styled('a', {
  fontFamily: '$fonts$logo',
  fontSize: '$fontSizes$logo',
  lineHeight: '1',
  color: '$colors$textOnDark',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '0.2em',
  paddingBottom: '$space$navSpacing',
  borderBottom: '$borderStyles$nav',
  '& img': {
    width: '1em',
    height: '1em',
  },
  '&:hover': {
    color: '$colors$secondary',
  },
  '&:active': {
    color: '$colors$secondaryLight',
  },
  '&:focus-visible': {
    outline: 'none',
    color: '$colors$secondary',
  },
});

export function Logo() {
  return (
    <StyledLink href="\">
      <img src="/logos/company_logo.svg" alt="" />
      HRnet
    </StyledLink>
  );
}
