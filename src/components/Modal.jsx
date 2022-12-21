import React from 'react';
import ReactModal from 'react-modal';
import { styled } from '../../stitches.config';
import { EmployeeForm } from './EmployeeForm';

ReactModal.setAppElement('#root');

ReactModal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'grey', // TODO
    display: 'grid',
    placeContent: 'center',
  },
  content: {
    padding: '2rem',
    background: '#fff',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
};

const ModalHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const CloseButton = styled('button', {
  cursor: 'pointer',
  padding: '0.5rem',
  background: 'transparent',
  border: 'none',
  '& path': {
    fill: '$colors$primaryLighter',
  },
  '&:hover': {
    '& path': {
      fill: '$colors$primary',
    },
  },
});

export function Modal({ isOpen, closeFn, contentLabel }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeFn}
      contentLabel={contentLabel}
      shouldFocusAfterRender={false}
    >
      <ModalHeader>
        <h2>{contentLabel}</h2>
        <CloseButton type="button" onClick={closeFn}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.00005 8.40005L2.10005 13.3C1.91672 13.4834 1.68338 13.575 1.40005 13.575C1.11672 13.575 0.883382 13.4834 0.700048 13.3C0.516715 13.1167 0.425049 12.8834 0.425049 12.6C0.425049 12.3167 0.516715 12.0834 0.700048 11.9L5.60005 7.00005L0.700048 2.10005C0.516715 1.91672 0.425049 1.68338 0.425049 1.40005C0.425049 1.11672 0.516715 0.883382 0.700048 0.700048C0.883382 0.516715 1.11672 0.425049 1.40005 0.425049C1.68338 0.425049 1.91672 0.516715 2.10005 0.700048L7.00005 5.60005L11.9 0.700048C12.0834 0.516715 12.3167 0.425049 12.6 0.425049C12.8834 0.425049 13.1167 0.516715 13.3 0.700048C13.4834 0.883382 13.575 1.11672 13.575 1.40005C13.575 1.68338 13.4834 1.91672 13.3 2.10005L8.40005 7.00005L13.3 11.9C13.4834 12.0834 13.575 12.3167 13.575 12.6C13.575 12.8834 13.4834 13.1167 13.3 13.3C13.1167 13.4834 12.8834 13.575 12.6 13.575C12.3167 13.575 12.0834 13.4834 11.9 13.3L7.00005 8.40005Z" />
          </svg>
        </CloseButton>
      </ModalHeader>
      <EmployeeForm closeModal={closeFn} />
    </ReactModal>
  );
}
