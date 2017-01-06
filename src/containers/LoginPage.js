import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as sessionActions from '../actions/sessionActions';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    nextProps.success && browserHistory.replace('/');
  }

  render() {
    const { login } = this.props.actions;

    return (
      <div>
        <p>LOGIN</p>
        <LoginForm onSubmit={login}/>
      </div>
    );
  }
}

const { object } = PropTypes;

LoginPage.propTypes = {
  actions: object.isRequired
};

const mapState = ({ session }) => ({
  success: session.loginSuccess
});

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(mapState, mapDispatch)(LoginPage);
