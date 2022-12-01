import React from 'react';
import { styled } from '../../stitches.config';

const StyledWrapper = styled('div', {});

const StyledMain = styled('main', {});

export function Content() {
  return (
    <StyledWrapper>
      <StyledMain>main</StyledMain>
    </StyledWrapper>
  );
}
