import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { sessionService } from 'redux-react-session';
import App from './components/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage'; // eslint-disable-line import/no-named-as-default
import SignUpPage from './containers/SignUpPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute onEnter={sessionService.checkAuth} component={HomePage} />
    <Route path="login" component={LoginPage} />
    <Route path="sign-up" component={SignUpPage} />
  </Route>
);
