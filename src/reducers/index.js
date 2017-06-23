import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { sessionReducer } from 'redux-react-session';

const rootReducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  session: sessionReducer
});

export default rootReducer;
