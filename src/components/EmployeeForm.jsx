import React from 'react';
import Select from 'react-select';
import { styled } from '../../stitches.config';
import { useEmployeesActions } from '../hooks/stores';
import { useForm } from '../hooks/useForm';
import { Button } from './Button';
import { departments } from '../utils/utils';
import { DateSelector } from './DateSelector';

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

const selectorStyles = {
  container: (css) => ({
    ...css,
    marginBottom: '1rem',
    minHeight: 'auto',
  }),
  control: (css) => ({
    ...css,
    border: 'none',
    borderRadius: '0px',
    minHeight: 'auto',
    borderBottom: '2px solid #FDCA40',
    background: '#3A3442',
    lineHeight: '2',
  }),
  valueContainer: (css) => ({
    ...css,
    padding: '0px',
  }),
  placeholder: (css) => ({
    ...css,
    margin: '0px',
    paddingLeft: '0.5rem',
  }),
  input: (css) => ({
    ...css,
    margin: '0px',
    padding: '0px',
    paddingLeft: '0.5rem',
  }),
  singleValue: (css) => ({
    ...css,
    margin: '0px',
    paddingLeft: '0.5rem',
    color: '#FFFFFF',
  }),
  indicatorsContainer: (css) => ({
    ...css,
    alignSelf: 'auto',
  }),
  dropdownIndicator: (css) => ({
    ...css,
    padding: '0px 0.25rem',
    color: '#FFFFFF',
  }),
  indicatorSeparator: (css) => ({
    ...css,
    margin: '0px',
    height: '20px',
    background: '#FFFFFF',
  }),
  menu: (css) => ({
    ...css,
    margin: '0px',
    borderRadius: '0px',
  }),
  option: (css) => ({
    ...css,
    color: '#150E1B',
    lineHeight: '2',
    padding: '0px',
    paddingLeft: '0.5rem',
  }),
};

export function EmployeeForm({ closeModal }) {
  const employeesStoreActions = useEmployeesActions();
  const [formValues, setFormValues] = useForm({
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
    employeesStoreActions.add(formValues);
    closeModal();
  };

  const handleInputChange = (e) => {
    setFormValues(e.target.id, e.target.value);
  };

  const handleSetDate = (name) => (date) => setFormValues(name, date);

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledWrapper>
        <StyledPanel>
          <StyledLabel htmlFor="firstname">Firstname</StyledLabel>
          <StyledInput
            type="text"
            id="firstname"
            name="firstname"
            onChange={handleInputChange}
            value={formValues.firstname}
          />
          <StyledLabel htmlFor="lastname">Lastname</StyledLabel>
          <StyledInput
            type="text"
            id="lastname"
            name="lastname"
            onChange={handleInputChange}
            value={formValues.lastname}
          />
          <StyledLabel htmlFor="departement">Departement</StyledLabel>
          <Select
            options={[...departments.names].map((name) => ({
              value: name,
              label: name,
            }))}
            inputId="departement"
            styles={selectorStyles}
            onChange={(e) => setFormValues('departement', e.value)}
          />
          <StyledLabel htmlFor="birthday">Birthday</StyledLabel>
          <DateSelector
            id="birthday"
            onInputChange={handleSetDate('birthday')}
            value={formValues.birthday}
          />
          <StyledLabel htmlFor="firstDayIn">FirstDayIn</StyledLabel>
          <DateSelector
            id="firstDayIn"
            onInputChange={handleSetDate('firstDayIn')}
            value={formValues.firstDayIn}
          />
        </StyledPanel>
        <StyledPanel>
          <StyledLabel htmlFor="street">Street</StyledLabel>
          <StyledInput
            type="text"
            id="street"
            name="street"
            onChange={handleInputChange}
            value={formValues.street}
          />
          <StyledLabel htmlFor="city">City</StyledLabel>
          <StyledInput
            type="text"
            id="city"
            name="city"
            onChange={handleInputChange}
            value={formValues.city}
          />
          <StyledLabel htmlFor="state">State</StyledLabel>
          <StyledInput
            type="text"
            id="state"
            name="state"
            onChange={handleInputChange}
            value={formValues.state}
          />
          <StyledLabel htmlFor="zipcode">Zipcode</StyledLabel>
          <StyledInput
            type="text"
            id="zipcode"
            name="zipcode"
            onChange={handleInputChange}
            value={formValues.zipcode}
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
