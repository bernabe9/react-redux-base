import React from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from '../components/session/LoginForm';
import PageHeading from '../components/common/PageHeading';
import PageWrapper from '../components/common/PageWrapper';
import { login } from '../actions/sessionActions';

const LoginPage = ({ authenticated, login }) => {
  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <PageWrapper>
      <PageHeading>LOGIN</PageHeading>
      <LoginForm onSubmit={login} />
      <Link to="sign-up">Sign up</Link>
    </PageWrapper>
  );
};

LoginPage.propTypes = {
  authenticated: bool.isRequired,
  login: func.isRequired
};

const mapState = state => ({
  authenticated: state.getIn(['session', 'authenticated'])
});

const mapDispatch = dispatch => ({
  login: user => dispatch(login(user.toJS()))
});

export default connect(mapState, mapDispatch)(LoginPage);
