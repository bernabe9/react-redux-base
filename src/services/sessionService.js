import * as constant from '../constants/apiConstants';
// import loginPatch from '../utils/loginPatch';
import * as localForage from "localforage";

export const loadSession = () => {
  return localForage.getItem(constant.USER_SESSION)
  .then(value => value)

  // try {
  //   debugger;
  //   const serializedState = localForage.getItem(constant.USER_SESSION);
  //   if (serializedState === null) {
  //     localForage.setItem('stub', 'stub');
  //     localForage.removeItem('stub');
  //     return undefined;
  //   }
  //   return JSON.parse(serializedState);
  // } catch (e) {
  //   let session = new loginPatch();
  //   return session.getSession();
  // }
};

export const saveSession = (userData) => {
  return localForage.setItem(constant.USER_SESSION, userData);
  // try {
  //   const serializedState = JSON.stringify(token);
  //   localForage.setItem(constant.USER_SESSION, serializedState);
  // } catch (e) {
  //   let session = new loginPatch();
  //   session.setSession(token.id, token.token, token.email);
  // }
};

export const deleteSession = () => {
  return localForage.removeItem(constant.USER_SESSION);
  // try {
  //   localForage.removeItem(key);
  //   localForage.setItem('stub', 'stub');
  //   localForage.removeItem('stub');
  // } catch (e) {
  //   let session = new loginPatch();
  //   session.deleteSession();
  // }
};

export const checkAuth = (nextState, replace, next) => {
  isLogged()
  .then(() => next())
  .catch(() => {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
    next()
  })
};

export const isLogged = () => {
  return new Promise((resolve, reject) => {
    loadSession()
    .then((currentSession) => {
      if (currentSession && currentSession.email && currentSession.token) {
        resolve(currentSession.token)
      } else {
        reject('nope')
      }
    })
  })
};
