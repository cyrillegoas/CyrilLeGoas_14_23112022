import React from 'react';
import { styled } from '../../stitches.config';
import { Content } from './Content';
import { Header } from './Header';
import { Nav } from './Nav';

const StyledWrapper = styled('div', {
  flex: '1',
  width: '100%',
  maxWidth: '$sizes$maxWidth',
  margin: 'auto',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  borderLeft: '1px dashed $colors$primaryLighter',
  borderRight: '1px dashed $colors$primaryLighter',
});

export function Layout() {
  return (
    <>
      <Header />
      <StyledWrapper>
        <Nav />
        <Content />
      </StyledWrapper>
    </>
  );
}
