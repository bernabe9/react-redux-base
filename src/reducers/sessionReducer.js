import * as types from '../actions/actionTypes';
import initialState from './initialState';

const sessionReducer = (state = initialState.session, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return { ...state, loginSuccess: true };
    }
    case types.LOGIN_ERROR: {
      return { ...state, loginError: action.response.error };
    }
    case types.LOGOUT_SUCCESS: {
      return { ...state, loginSuccess: false };
    }
    default: {
      return state;
    }
  }
};

export default sessionReducer;
