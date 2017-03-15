/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import { sessionService } from 'redux-react-session';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import './styles/styles.scss';

const store = configureStore();

sessionService.initSessionService(store);

const renderApp = Component => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp(App);
  });
}
