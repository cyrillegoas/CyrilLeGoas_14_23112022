import React from 'react';
import { styled } from '../../stitches.config';

const StyledButton = styled('button', {
  fontWeight: '$fontWeights$bold',
  py: '0.5em',
  px: '1em',
  border: 'none',
  borderRadius: '$radii$default',
  variants: {
    variant: {
      default: {
        background: '$colors$secondary',
        color: '$colors$textOnLight',
        '&:hover': {
          background: '$secondaryLight',
        },
        '&:active': {
          background: '$secondaryLighter',
        },
      },
      cancel: {
        background: '$colors$warning',
        color: '$colors$textOnDark',
        '&:hover': {
          background: '$colors$warningLight',
        },
        '&:active': {
          background: '$colors$warningLighter',
        },
      },
    },
  },
});

export function Button({
  type = 'button',
  variant = 'default',
  onClick,
  children,
}) {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
