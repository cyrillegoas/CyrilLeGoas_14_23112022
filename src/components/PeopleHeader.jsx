import React, { useState } from 'react';
import { Modal } from './Modal';
import { styled } from '../../stitches.config';

const StyledSection = styled('section', {
  marginBottom: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export function PeopleHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledSection>
      <h1>Employee roster</h1>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        ADD employee
      </button>
      <Modal
        contentLabel="Add employee"
        isOpen={isModalOpen}
        closeFn={() => setIsModalOpen(false)}
      />
    </StyledSection>
  );
}
