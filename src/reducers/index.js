import { combineReducers } from 'redux';
import session from './sessionReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  session,
  routing: routerReducer
});

export default rootReducer;
