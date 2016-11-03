import * as types from '../actions/actionTypes';
import initialState from './initialState';

const sessionReducer = (state = initialState.session, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return { successLogin: true };
    }
    case types.LOGIN_ERROR: {
      return { errorLogin: action.response.error };
    }
    case types.LOGOUT_SUCCESS: {
      return { successLogin: false };
    }
    default: {
      return state;
    }
  }
};

export default sessionReducer;
