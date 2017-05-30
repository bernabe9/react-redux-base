import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import * as signUpActions from '../actions/signUpActions';
import SignUpForm from '../components/user/SignUpForm';

const SignUpPage = ({ authenticated, actions: { signUp } }) => {
  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <p>SIGN UP</p>
      <SignUpForm onSubmit={signUp} />
    </div>
  );
};

const { object, bool } = PropTypes;

SignUpPage.propTypes = {
  actions: object.isRequired,
  authenticated: bool.isRequired
};

const mapState = ({ session }) => ({
  authenticated: session.authenticated
});

const mapDispatch = dispatch => ({
  actions: bindActionCreators(signUpActions, dispatch)
});

export default connect(mapState, mapDispatch)(SignUpPage);
