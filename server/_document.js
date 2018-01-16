import React from 'react';

class Document extends React.Component {
  static getInitialProps({ assets, data, renderPage }) {
    const page = renderPage();
    return { assets, data, ...page };
  }

  render() {
    const { helmet, assets } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html lang="en" {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>React Redux Base</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {assets.main.css && (
            <link rel="stylesheet" href={assets.main.css} />
          )}
        </head>
        <body {...bodyAttrs}>
          <div id="app">SSR_MARKUP</div>
          <script
            type="text/javascript"
            src={assets.main.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}

export default Document;
