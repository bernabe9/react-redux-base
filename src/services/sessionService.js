import * as constant from '../constants/apiConstants';
import * as localForage from 'localforage';

export const loadSession = () => {
  return localForage.getItem(constant.USER_SESSION)
  .then(value => value);
};

export const saveSession = (userData) => {
  return localForage.setItem(constant.USER_SESSION, userData);
};

export const deleteSession = () => {
  return localForage.removeItem(constant.USER_SESSION);
};

export const checkAuth = (nextState, replace, next) => {
  isLogged()
  .then(() => next())
  .catch(() => {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
    next();
  });
};

export const isLogged = () => {
  return new Promise((resolve, reject) => {
    loadSession()
    .then((currentSession) => {
      if (currentSession && currentSession.email && currentSession.token) {
        resolve(currentSession.token);
      } else {
        reject('nope');
      }
    });
  });
};
