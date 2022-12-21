import React from 'react';
import { styled } from '../../stitches.config';
import { useEmployeesActions } from '../hooks/stores';
import { useForm } from '../hooks/useForm';

const StyledForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
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

  const handleFormSubmit = () => {
    employeesStoreActions.add(values);
    closeModal();
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <label htmlFor="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        onChange={handleChange}
        value={values.firstname}
      />
      <label htmlFor="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        onChange={handleChange}
        value={values.lastname}
      />
      <label htmlFor="departement">Departement</label>
      <input
        type="text"
        id="departement"
        name="departement"
        onChange={handleChange}
        value={values.departement}
      />
      <label htmlFor="birthday">Birthday</label>
      <input
        type="text"
        id="birthday"
        name="birthday"
        onChange={handleChange}
        value={values.birthday}
      />
      <label htmlFor="firstDayIn">FirstDayIn</label>
      <input
        type="text"
        id="firstDayIn"
        name="firstDayIn"
        onChange={handleChange}
        value={values.firstDayIn}
      />
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={handleChange}
        value={values.street}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleChange}
        value={values.city}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        id="state"
        name="state"
        onChange={handleChange}
        value={values.state}
      />
      <label htmlFor="zipcode">Zipcode</label>
      <input
        type="text"
        id="zipcode"
        name="zipcode"
        onChange={handleChange}
        value={values.zipcode}
      />
      <button type="submit">confirm</button>
    </StyledForm>
  );
}
