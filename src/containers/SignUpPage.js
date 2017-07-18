import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import { signUp } from '../actions/signUpActions';
import SignUpForm from '../components/user/SignUpForm';

const SignUpPage = ({ signUp }) => (
  <div>
    <p>SIGN UP</p>
    <SignUpForm onSubmit={signUp} />
  </div>
);

SignUpPage.propTypes = {
  signUp: func.isRequired
};

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user.toJS()))
});

export default connect(null, mapDispatch)(SignUpPage);
