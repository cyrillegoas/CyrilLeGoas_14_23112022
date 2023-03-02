import React from 'react';
import useDialog from 'oc-react-dialog';
import { styled } from '../../stitches.config';
import { Button } from './Button';
import { EmployeeForm } from './EmployeeForm';

const StyledSection = styled('section', {
  marginBottom: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& .customDialog': {
    width: '100vw',
    height: '100vh',
  },
});

const StyledH1 = styled('h1', {
  fontSize: '2rem',
});

const StyledWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'grid',
  placeContent: 'center',
});

export function PeopleHeader() {
  const [Dialog, openDialog, closeDialog] = useDialog();

  return (
    <StyledSection>
      <StyledH1>Employee roster</StyledH1>
      <Button onClick={() => openDialog()}>+ Add new employee</Button>
      <Dialog className="customDialog">
        <StyledWrapper>
          <EmployeeForm closeModal={closeDialog} />
        </StyledWrapper>
      </Dialog>
    </StyledSection>
  );
}
