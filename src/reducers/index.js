import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { sessionImmutableReducer as session } from 'redux-react-session';

import router from './routerReducer';
import player from './playerReducer';

const rootReducer = combineReducers({
  router,
  form,
  session,
  player
});

export default rootReducer;
