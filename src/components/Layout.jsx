import React from 'react';
import { styled } from '../../stitches.config';
import { Header } from './Header';

const StyledMain = styled('main', {
  flex: '1',
});

export function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}
