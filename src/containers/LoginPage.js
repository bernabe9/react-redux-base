import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import * as sessionActions from '../actions/sessionActions';
import LoginForm from '../components/session/LoginForm';

export const LoginPage = ({ authenticated, actions: { login } }) => {
  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <p>LOGIN</p>
      <LoginForm onSubmit={login} />
      <Link to="sign-up">Sign up</Link>
    </div>
  );
};

const { object, bool } = PropTypes;

LoginPage.propTypes = {
  actions: object.isRequired,
  authenticated: bool.isRequired
};

const mapState = ({ session }) => ({
  authenticated: session.authenticated
});

const mapDispatch = dispatch => ({
  actions: bindActionCreators(sessionActions, dispatch)
});

export default connect(mapState, mapDispatch)(LoginPage);
