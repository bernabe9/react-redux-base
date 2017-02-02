import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

export const initialState = Immutable.Map({
  authenticated: false
});

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
    case types.GET_SESSION_SUCCESS: {
      return state.set('authenticated', true);
    }
    case types.LOGOUT_SUCCESS:
    case types.GET_SESSION_ERROR: {
      return state.set('authenticated', false);
    }
    default: {
      return state;
    }
  }
};

export default sessionReducer;
