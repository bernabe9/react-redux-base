import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

import Input from '../common/Input';
import * as constraints from '../../utils/constraints';

const SignUpForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        name="email"
        label="Email"
        component={Input}
        type="email"
      />
    </div>
    <div>
      <Field
        name="password"
        label="Password"
        component={Input}
        type="password"
      />
    </div>
    <div>
      <Field
        name="passwordConfirmation"
        label="Password confirmation"
        component={Input}
        type="password"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
);

SignUpForm.propTypes = {
  handleSubmit: func.isRequired
};

export default reduxForm({
  form: 'signUp',
  validate: constraints.validations(constraints.signUp)
})(SignUpForm);
