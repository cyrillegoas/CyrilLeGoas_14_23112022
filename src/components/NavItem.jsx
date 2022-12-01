import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

const StyledLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '0.2em',
  fontSize: '$fontSizes$navItem',
  textDecoration: 'none',
  padding: '0.5em',
  borderRadius: '$radii$default',
  '&:hover': {
    background: '$colors$primaryLight',
  },
});

const StyledSVG = styled('svg', {
  flex: '0 0 1.5em',
  fill: 'none',
  '& *': {
    stroke: '$colors$text',
  },
});

const StyledSpan = styled('span', {
  color: '$colors$text',
});

export function NavItem({ item }) {
  return (
    <StyledLink to={item.path}>
      <StyledSVG viewBox="0 0 24 24">{item.icon}</StyledSVG>
      <StyledSpan>{item.name}</StyledSpan>
    </StyledLink>
  );
}
