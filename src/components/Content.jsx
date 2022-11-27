import React from 'react';
import { styled } from '../../stitches.config';

const StyledWrapper = styled('div', {});

const StyledMain = styled('main', {
  background: '$colors$greyLighter',
  height: '100%',
  borderRadius: '$radii$default',
});

export function Content() {
  return (
    <StyledWrapper>
      <StyledMain>main</StyledMain>
    </StyledWrapper>
  );
}
