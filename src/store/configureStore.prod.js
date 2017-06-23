import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from '../utils/history';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middewares = [
    routerMiddleware(history),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middewares)
    )
  );
}
