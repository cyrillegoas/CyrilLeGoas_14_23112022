import React from 'react';
import { styled } from '../../stitches.config';
import { useEmployeesActions } from '../hooks/stores';
import { useForm } from '../hooks/useForm';
import { Button } from './Button';

const StyledForm = styled('form', {
  color: '$colors$textOnDark',
  padding: '2rem',
  background: '#281B33',
  borderRadius: '20px',
});

const StyledWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2,30ch)',
  gap: '2rem',
  marginBottom: '2rem',
});

const StyledButtonWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
});

const StyledPanel = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '& input': {
    marginBottom: '1rem',
  },
  '& input:last-of-type': {
    marginBottom: '0',
  },
});

const StyledLabel = styled('label', {
  marginBottom: '0.2rem',
  fontWeight: '$fontWeights$bold',
});

const StyledInput = styled('input', {
  background: '#3A3442',
  color: '$colors$textOnDark',
  border: 'none',
  borderBottom: '2px solid #FDCA40',
  padding: '0',
  paddingLeft: '0.5rem',
  lineHeight: '2',
});

export function EmployeeForm({ closeModal }) {
  const employeesStoreActions = useEmployeesActions();
  const [values, handleChange] = useForm({
    firstname: '',
    lastname: '',
    departement: '',
    birthday: '',
    firstDayIn: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    employeesStoreActions.add(values);
    closeModal();
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledWrapper>
        <StyledPanel>
          <StyledLabel htmlFor="firstname">Firstname</StyledLabel>
          <StyledInput
            type="text"
            id="firstname"
            name="firstname"
            onChange={handleChange}
            value={values.firstname}
          />
          <StyledLabel htmlFor="lastname">Lastname</StyledLabel>
          <StyledInput
            type="text"
            id="lastname"
            name="lastname"
            onChange={handleChange}
            value={values.lastname}
          />
          <StyledLabel htmlFor="departement">Departement</StyledLabel>
          <StyledInput
            type="text"
            id="departement"
            name="departement"
            onChange={handleChange}
            value={values.departement}
          />
          <StyledLabel htmlFor="birthday">Birthday</StyledLabel>
          <StyledInput
            type="date"
            id="birthday"
            name="birthday"
            onChange={handleChange}
            value={values.birthday}
          />
          <StyledLabel htmlFor="firstDayIn">FirstDayIn</StyledLabel>
          <StyledInput
            type="date"
            id="firstDayIn"
            name="firstDayIn"
            onChange={handleChange}
            value={values.firstDayIn}
          />
        </StyledPanel>
        <StyledPanel>
          <StyledLabel htmlFor="street">Street</StyledLabel>
          <StyledInput
            type="text"
            id="street"
            name="street"
            onChange={handleChange}
            value={values.street}
          />
          <StyledLabel htmlFor="city">City</StyledLabel>
          <StyledInput
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            value={values.city}
          />
          <StyledLabel htmlFor="state">State</StyledLabel>
          <StyledInput
            type="text"
            id="state"
            name="state"
            onChange={handleChange}
            value={values.state}
          />
          <StyledLabel htmlFor="zipcode">Zipcode</StyledLabel>
          <StyledInput
            type="text"
            id="zipcode"
            name="zipcode"
            onChange={handleChange}
            value={values.zipcode}
          />
        </StyledPanel>
      </StyledWrapper>
      <StyledButtonWrapper>
        <Button type="submit">Confirm</Button>
        <Button onClick={() => closeModal()} variant="cancel">
          Cancel
        </Button>
      </StyledButtonWrapper>
    </StyledForm>
  );
}
