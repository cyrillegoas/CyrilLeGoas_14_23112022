import React from 'react';
import { styled } from '../../stitches.config';
import { Content } from './Content';
import { Header } from './Header';

const StyledWrapper = styled('div', {
  flex: '1',
});

export function Layout() {
  return (
    <>
      <Header />
      <StyledWrapper>
        <Content />
      </StyledWrapper>
    </>
  );
}
