import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import * as session from '../services/sessionService';

export const loginSuccess = (response) => {
  return {
    type: types.LOGIN_SUCCESS,
    response
  };
};

export const loginError = (response) => {
  return {
    type: types.LOGIN_ERROR,
    response
  };
};

export const logoutSuccess = () => {
  return { type: types.LOGOUT_SUCCESS };
};

export const login = (user) => {
  return (dispatch) => {
    return sessionApi.login(user).then(response => {
      session.saveSession(response);
      dispatch(loginSuccess(response));
    }).catch(err => {
      dispatch(loginError(err));
    });
  };
};

export const logout = (history) => {
  return (dispatch) => {
    session.deleteSession();
    history.push('/login');
    return sessionApi.logout().then(() => {
      dispatch(logoutSuccess());
    }).catch(err => {
      throw (err);
    });
  };
};
