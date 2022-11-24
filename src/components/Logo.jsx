import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

const StyledLink = styled(Link, {
  fontFamily: '$fonts$logo',
  fontSize: '$fontSizes$logo',
  lineHeight: '1',
  textDecoration: 'none',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  gap: '0.2em',
  '& img': {
    width: '1em',
    height: '1em',
  },
  '&:link': {
    color: 'inherit',
  },
  '&:visited': {
    color: 'inherit',
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
    <StyledLink to="/">
      <img src="/logos/company_logo.svg" alt="" />
      HRnet
    </StyledLink>
  );
}
