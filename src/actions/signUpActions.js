import { SubmissionError } from 'redux-form';
import { browserHistory } from 'react-router';
import { sessionService } from 'redux-react-session';
import sessionApi from '../api/sessionApi';

export const signUp = (user) => {
  return () => {
    return sessionApi.signUp({ user }).then(response => {
      sessionService.saveUser(response.data)
      .then(() => {
        browserHistory.replace('/');
      });
    }).catch(err => {
      throw new SubmissionError(err.errors);
    });
  };
};
