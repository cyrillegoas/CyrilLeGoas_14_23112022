import React from 'react';
import { styled } from '../../stitches.config';

const StyledButton = styled('button', {
  background: '$secondary',
  color: '$colors$primary',
  fontWeight: '$fontWeights$bold',
  py: '0.5em',
  px: '1em',
  border: 'none',
  borderRadius: '$radii$default',
  '&:hover': {
    background: '$secondaryLight',
  },
  '&:active': {
    background: '$secondaryLighter',
  },
});

export function Button({ onClick, children }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
}
