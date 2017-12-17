import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

import InputField from '../common/input/InputField';
import * as constraints from '../../utils/constraints';

const SignUpForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
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
    <div>
      <Field
        name="passwordConfirmation"
        label="Password confirmation"
        component={InputField}
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
