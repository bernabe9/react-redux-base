import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import SignUpForm from '../components/user/SignUpForm';
import PageHeading from '../components/common/PageHeading';
import PageWrapper from '../components/common/PageWrapper';
import { signUp } from '../actions/signUpActions';

const SignUpPage = ({ signUp }) => (
  <PageWrapper>
    <PageHeading>SIGN UP</PageHeading>
    <SignUpForm onSubmit={signUp} />
  </PageWrapper>
);

SignUpPage.propTypes = {
  signUp: func.isRequired
};

const mapDispatch = dispatch => ({
  signUp: user => dispatch(signUp(user.toJS()))
});

export default connect(null, mapDispatch)(SignUpPage);
