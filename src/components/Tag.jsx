import React from 'react';
import { styled } from '../../stitches.config';
import { departments } from '../utils/utils';

const StyledSpan = styled('span', {
  background: '$$color',
  color: '$colors$textOnDark',
  py: '0.5em',
  px: '1em',
  borderRadius: '500px',
});

export function Tag({ children }) {
  return (
    <StyledSpan css={{ $$color: departments.colors[children] }}>
      {children}
    </StyledSpan>
  );
}
