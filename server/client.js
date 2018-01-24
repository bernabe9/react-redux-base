import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';

import configureStore from '../src/store/configureStore';
import App from '../src/components/App';
import '../src/styles/styles.scss';

require('../src/favicon.ico'); // Tell webpack to load favicon.ico

process.env.BROWSER = true;

const store = configureStore();

sessionService.initSessionService(store, { driver: 'COOKIES' });

const renderApp = (Component) => {
  hydrate(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept();
}
