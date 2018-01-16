import path from 'path';
import React from 'react';
// import url from 'url';
import express from 'express';
import Helmet from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './_app';
import routes from './_routes';
import Doc from './_document';
import configureStore from '../src/store/configureStore';
// import loadInitialProps from './loadInitialProps';

const assets = require('./build/assets.json');

const server = express();

// const serverDir = path.join(__dirname);

const modPageFn = Page => props => <Page {...props} />;

server
  .disable('x-powered-by')
  .use(express.static('server/build/public'))
  .get('*', async (req, res) => {
    try {
      const store = configureStore();
      const context = {};
      // const data = await loadInitialProps(routes, url.parse(req.url).pathname, {
      //   req,
      //   res,
      // });

      const renderPage = (fn = modPageFn) => {
        const staticRouter = (
          <Provider store={store} key="provider">
            <StaticRouter location={req.url} context={context}>
              {fn(App)({ routes })}
            </StaticRouter>
          </Provider>
        );
        const html = ReactDOMServer.renderToString(staticRouter);
        const helmet = Helmet.renderStatic();
        return { html, helmet };
      };

      const { html, ...docProps } = await Doc.getInitialProps({
        req,
        res,
        assets,
        renderPage,
        // data: data[0],
      });

      const doc = ReactDOMServer.renderToStaticMarkup(<Doc {...docProps} />);
      res.send(`<!doctype html> ${doc.replace('SSR_MARKUP', html)}`);
    } catch (error) {
      console.log(error)
      res.json(error);
    }
  });

export default server;
