import { useState } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (inputName, value) => {
      setValues({ ...values, [inputName]: value });
    },
  ];
};
