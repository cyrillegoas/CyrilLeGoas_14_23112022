import React from 'react';
import ReactModal from 'react-modal';
import { EmployeeForm } from './EmployeeForm';

ReactModal.setAppElement('#root');

ReactModal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'hsla(0, 0%, 100%, 85%)',
    display: 'grid',
    placeContent: 'center',
  },
  content: {
    padding: '2rem',
    background: '#281B33',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
};

export function Modal({ isOpen, closeFn, contentLabel }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeFn}
      contentLabel={contentLabel}
      shouldFocusAfterRender={false}
    >
      <EmployeeForm closeModal={closeFn} />
    </ReactModal>
  );
}
