import React from 'react';
import { styled } from '../../../stitches.config';

const StyledSVG = styled('svg', {
  width: '1.5em',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&.asc': {
    color: '$colors$textOnLight',
  },
  '&.desc': {
    color: '$colors$textOnLight',
    transform: 'rotate(-0.5turn);',
  },
});

export function Sort({ sortToggleFn, isSorted }) {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={isSorted}
      onClick={sortToggleFn}
    >
      <polyline points="6 9 12 15 18 9" />
    </StyledSVG>
  );
}
