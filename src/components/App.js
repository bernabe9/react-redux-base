import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import history from '../utils/history';
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage'; // eslint-disable-line import/no-named-as-default
import SignUpPage from '../containers/SignUpPage'; // eslint-disable-line import/no-named-as-default
import PrivateRoute from './routes/PrivateRoute';

const App = ({ authenticated, checked }) => (
  <ConnectedRouter history={history}>
    { checked &&
      <div>
        <PrivateRoute
          exact
          path="/"
          component={HomePage}
          authenticated={authenticated}
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/sign-up" component={SignUpPage} />
      </div>
    }
  </ConnectedRouter>
);

const { bool } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

const mapState = state => ({
  checked: state.getIn(['session', 'checked']),
  authenticated: state.getIn(['session', 'authenticated'])
});

export default connect(mapState)(App);

