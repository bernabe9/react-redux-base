import { SubmissionError } from 'redux-form';
import { browserHistory } from 'react-router';
import { sessionService } from 'redux-react-session';
import sessionApi from '../api/sessionApi';

export const login = (user) => {
  return () => {
    return sessionApi.login({ user }).then(response => {
      sessionService.saveUser(response.data)
      .then(() => {
        browserHistory.replace('/');
      });
    }).catch(err => {
      throw new SubmissionError({
        _error: err.errors[0]
      });
    });
  };
};

export const logout = () => {
  return () => {
    return sessionApi.logout().then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
      browserHistory.replace('/login');
    }).catch(err => {
      throw (err);
    });
  };
};
