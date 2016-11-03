import { combineReducers } from 'redux';
import users from './userReducer';
import session from './sessionReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  users,
  session,
  routing: routerReducer
});

export default rootReducer;
