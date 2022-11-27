import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

const StyledSVG = styled('svg', {
  width: '2rem',
  height: '2rem',
  fill: 'none',
  '& *': {
    stroke: '$primary',
  },
});

export function NavItem({ item }) {
  return (
    <Link to={item.path}>
      <StyledSVG viewBox="0 0 24 24">{item.icon}</StyledSVG>
    </Link>
  );
}
