# React Redux Base
[![Build status: Linux](https://circleci.com/gh/bernabe9/react-redux-base.svg?style=shield)](https://circleci.com/gh/bernabe9/react-redux-base)
[![devDependencies Status](https://david-dm.org/bernabe9/react-redux-base/dev-status.svg)](https://david-dm.org/bernabe9/react-redux-base?type=dev)

## Npm commands
1. **Run the app**. `yarn start`
2. **Build the app**. `yarn build`
3. **Lint the app**. `yarn lint`
4. **Test the app**. `yarn test`

## Getting Started
1. Clone the repository
2. Install dependencies: `yarn` or `npm install`
3. Create the environment variables files in root folder(.env.dev, .env.staging and .env.prod):

  `.env.example` example:
  ```
    API_URL=http://your-api-url.com
    AWS_BUCKET=bucket
    AWS_REGION=region
    AWS_ACCESS_KEY_ID=key_id
    AWS_SECRET_ACCESS_KEY=secret_key
  ```
4. Start the dev server: `yarn start` or `npm start -s`


## Initial Machine Setup
**Install [Node 4.0.0 or greater](https://nodejs.org)** - (5.0 or greater is recommended for optimal build performance). Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).

## Deploying to AWS S3
1. **Add the environment variables for each .env** AWS_BUCKET, AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
2. **Run the command to deploy with an environment** `yarn deploy:dev`, `yarn deploy:staging` or `yarn deploy:prod`

## Technologies

| **Tech** | **Description**
|----------|-------
|  [React](https://facebook.github.io/react/)  |   Fast, composable client-side components.|
|  [Redux](http://redux.js.org) |  Enforces unidirectional data flows and immutable, hot reloadable store. Supports time-travel debugging.|
|  [React Router 4](https://github.com/reactjs/react-router) | A complete routing library for React |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.|
| [Webpack 3](http://webpack.github.io) | Bundles npm packages and our JS into a single file |
| [Express](https://github.com/expressjs/express) | Fast, unopinionated, minimalist web framework for node. |
| [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and  [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. |
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. |
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more.
| [PostCSS](https://github.com/postcss/postcss) | Transform styles with JS plugins. Used to autoprefix CSS |
| [Stylelint](https://github.com/stylelint/stylelint) | Modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets. |
| [ReduxForm](http://redux-form.com/6.4.3/) | Redux-form works with React Redux to enable an html form in React to use Redux to store all of its state. |
| [Isomorphic Fetch](https://github.com/matthew-andrews/isomorphic-fetch) |  Is a Promise-based mechanism for programatically making web requests in the browser. |
| [Validate.js](https://validatejs.org/) | Provides a declarative way of validating javascript objects. |
| [Humps](https://github.com/domchristie/humps) | Underscore-to-camelCase converter (and vice versa) for strings and object keys in JavaScript.|
| [Redux Logger](https://github.com/evgenyrodionov/redux-logger) | Logger middleware for Redux. |
| [Immutable.js](https://github.com/facebook/immutable-js/) | Immutable persistent data collections for Javascript which increase efficiency and simplicity. |
| [Redux React Session](https://github.com/bernabe9/redux-react-session) | Keep your session sync with localStorage and Redux |
