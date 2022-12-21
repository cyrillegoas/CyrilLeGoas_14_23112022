import React, { useState } from 'react';
import { Modal } from './Modal';
import { styled } from '../../stitches.config';

const StyledSection = styled('section', {
  padding: '1rem 2rem',
});

export function PeopleHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledSection>
      <h1>People</h1>
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
