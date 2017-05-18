import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage'; // eslint-disable-line import/no-named-as-default
import SignUpPage from '../containers/SignUpPage'; // eslint-disable-line import/no-named-as-default
import PrivateRoute from './routes/PrivateRoute';

const App = ({ authenticated, checked }) => (
  <Router>
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
  </Router>
);

const { bool } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

const mapState = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated
});

export default connect(mapState)(App);

