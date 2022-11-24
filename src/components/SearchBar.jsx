import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '../../stitches.config';

const StyledForm = styled('form', {
  display: 'flex',
  alignItems: 'center',
  height: '$fontSizes$logo',
  px: '0.5rem',
  gap: '0.5rem',
  background: '$colors$backgroundLight',
  borderRadius: '$radii$default',
  '&:hover,&:focus-within': {
    '& svg path': { stroke: '$colors$text' },
    '& input,& input::placeholder': { color: '$colors$text' },
  },
  '&:focus': {},
  '&:active': {},
  '&:focus-within': {
    outline: '2px solid $colors$accent',
  },
});

const StyledLabel = styled('label', {
  srOnly: true,
});

const StyledButton = styled('button', {
  display: 'inline-block',
  border: 'none',
  padding: '0px',
  my: '0px',
  mx: '0px',
  textDecoration: 'none',
  background: 'transparent',
  cursor: 'pointer',
  textAlign: 'center',
  '&:focus-visible': { outline: 'none' },
});

const StyledSVG = styled('svg', {
  width: '1.5rem',
  height: '1.5rem',
  '& path': { stroke: '$colors$grey' },
});

const StyledInput = styled(motion.input, {
  fontFamily: '$text',
  fontWeight: '$medium',
  color: '$colors$grey',
  height: '100%',
  width: '10ch',
  border: 'none',
  background: 'transparent',
  '&:focus-visible': { outline: 'none' },
  '&::placeholder': { color: '$colors$grey', opacity: '1' },
});

export function SearchBar() {
  return (
    <StyledForm>
      <StyledLabel htmlFor="search">search</StyledLabel>
      <StyledButton type="button" tabindex="-1">
        <StyledSVG fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
          />
        </StyledSVG>
      </StyledButton>
      <StyledInput
        type="text"
        name="search"
        id="search"
        placeholder="search"
        whileFocus={{
          width: '20ch',
        }}
        transition={{ ease: 'backIn' }}
      />
    </StyledForm>
  );
}
