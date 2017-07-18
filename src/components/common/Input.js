import React from 'react';
import { string, object } from 'prop-types';

const Input = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div>
    {label && <label>{label}</label>}
    <div>
      <input {...input} {...{ placeholder, type }} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

Input.propTypes = {
  input: object.isRequired,
  type: string.isRequired,
  label: string,
  placeholder: string,
  meta: object
};

export default Input;
