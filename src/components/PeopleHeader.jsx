import React, { useState } from 'react';
import { Modal } from './Modal';
import { styled } from '../../stitches.config';
import { Button } from './Button';

const StyledSection = styled('section', {
  marginBottom: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledH1 = styled('h1', {
  fontSize: '2rem',
});

export function PeopleHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledSection>
      <StyledH1>Employee roster</StyledH1>
      <Button onClick={() => setIsModalOpen(true)}>+ Add new employee</Button>
      <Modal
        contentLabel="Add employee"
        isOpen={isModalOpen}
        closeFn={() => setIsModalOpen(false)}
      />
    </StyledSection>
  );
}
