import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import { checkAuth } from './services/sessionService';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute onEnter={checkAuth} component={HomePage} />
    <Route path="login" component={LoginPage} />
  </Route>
);
