import React from 'react';
import { styled } from '../../stitches.config';

const StyledSection = styled('section', {
  padding: '1rem 2rem',
});

export function PeopleHeader() {
  return (
    <StyledSection>
      <h1>People</h1>
    </StyledSection>
  );
}
