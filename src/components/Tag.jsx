import React from 'react';
import { styled } from '../../stitches.config';
import { departments } from '../utils/utils';

const StyledSpan = styled('span', {
  background: '$$backgroundcolor',
  color: '$$foregroundcolor',
  py: '0.5em',
  px: '1em',
  borderRadius: '500px',
  fontWeight: '$fontWeights$bold',
});

export function Tag({ children }) {
  return (
    <StyledSpan
      css={{
        $$backgroundcolor: departments.colors[children].background,
        $$foregroundcolor: departments.colors[children].foreground,
      }}
    >
      {children}
    </StyledSpan>
  );
}
