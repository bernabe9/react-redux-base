import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-session';
import sessionApi from '../api/sessionApi';

export const signUp = (user) => {
  return () => {
    return sessionApi.signUp({ user }).then(response => {
      sessionService.saveUser(response.data);
    }).catch(err => {
      throw new SubmissionError(err.errors);
    });
  };
};
