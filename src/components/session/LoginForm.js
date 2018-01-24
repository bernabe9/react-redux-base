import React from 'react';
import { func, string } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

import InputField from '../common/input/InputField';
import * as constraints from '../../utils/constraints';
import '../../styles/other-style.scss';

export const LoginForm = ({ handleSubmit, error }) => (
  <form className="login-form" onSubmit={handleSubmit}>
    {error && <strong>{error}</strong>}
    <div>
      <Field
        name="email"
        label="Email"
        component={InputField}
        type="email"
      />
    </div>
    <div>
      <Field
        name="password"
        label="Password"
        component={InputField}
        type="password"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: constraints.validations(constraints.login)
})(LoginForm);
