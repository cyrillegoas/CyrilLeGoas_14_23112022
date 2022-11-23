import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

const StyledLink = styled(Link, {
  fontFamily: '$fonts$logo',
  fontSize: '$sizes$logo',
  textDecoration: 'none',
  width: 'fit-content',
  display: 'flex',
  gap: '0.2em',
  '& img': {
    width: '1em',
  },
  '&:link': {
    color: 'inherit',
  },
  '&:visited': {
    color: 'inherit',
  },
  '&:hover': {
    color: '$accent',
  },
  '&:active': {
    color: '$accentLight',
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
