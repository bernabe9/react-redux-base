import React from 'react';
import { string, object } from 'prop-types';

import Input from './Input';
import InputLabel from './InputLabel';
import InputError from './InputError';
import InputWrapper from './InputWrapper';

const InputField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error }
}) => (
  <InputWrapper>
    {label && <InputLabel>{label}</InputLabel>}
    <Input {...input} {...{ placeholder, type }} />
    {touched && error && <InputError>{error}</InputError>}
  </InputWrapper>
);

InputField.propTypes = {
  input: object.isRequired,
  type: string.isRequired,
  label: string,
  placeholder: string,
  meta: object
};

export default InputField;
