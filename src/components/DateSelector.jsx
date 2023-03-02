import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { styled } from '../../stitches.config';
import 'react-datepicker/dist/react-datepicker.css';

const StyledInput = styled('input', {
  background: '#3A3442',
  color: '$colors$textOnDark',
  border: 'none',
  borderBottom: '2px solid #FDCA40',
  padding: '0',
  paddingLeft: '0.5rem',
  lineHeight: '2',
  width: '100%',
  fontVariantNumeric: 'tabular-nums',
  marginBottom: '1rem',
});

const CustomInput = forwardRef(({ id, value, onClick, onChange }, ref) => (
  <StyledInput
    id={id}
    name={id}
    ref={ref}
    value={value}
    onClick={onClick}
    onChange={onChange}
  />
));

export function DateSelector({ id, onInputChange, value }) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => {
        setSelectedDate(date);
        onInputChange(
          new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).format(date)
        );
      }}
      customInput={
        <CustomInput id={id} value={value} onChange={onInputChange} />
      }
    />
  );
}
