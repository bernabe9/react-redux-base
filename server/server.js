import React from 'react';
import express from 'express';
import Helmet from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';
import { matchRoutes } from 'react-router-config';

import App from './_app';
import routes from './_routes';
import Doc from './_document';
import configureStore from '../src/store/configureStore.prod';

const assets = require('./build/assets.json');

const server = express();

server
  .disable('x-powered-by')
  .use(express.static('server/build/public'))
  .get('*', async (req, res) => {
    try {
      const store = configureStore();
      const context = {};

      try {
        await sessionService.initServerSession(store, req);
      } catch (err) {}

      const promises = matchRoutes(routes, req.path)
        .map(({ route }) => (route.component.loadData ? route.component.loadData(store) : null))
        .map((promise) => {
          if (promise) {
            return new Promise((resolve) => {
              promise.then(resolve).catch(resolve);
            });
          }
        });

      Promise.all(promises).then(async () => {
        const renderPage = () => {
          const staticRouter = (
            <Provider store={store} key="provider">
              <StaticRouter location={req.url} context={context}>
                <App routes={routes} />
              </StaticRouter>
            </Provider>
          );
          const html = ReactDOMServer.renderToString(staticRouter);
          const helmet = Helmet.renderStatic();
          return { html, helmet };
        };

        const { html, helmet } = renderPage();

        // Redirect
        if (context.url) {
          res.writeHead(302, {
            Location: context.url
          });
          res.end();
        } else {
          const docProps = { helmet, assets };
          const doc = ReactDOMServer.renderToStaticMarkup(<Doc {...docProps} />);
          res.send(`<!doctype html> ${doc.replace('SSR_MARKUP', html)}`);
        }
      });
    } catch (error) {
      res.json(error);
    }
  });

export default server;
