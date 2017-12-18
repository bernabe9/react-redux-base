import { SubmissionError } from 'redux-form/immutable';
import { sessionService } from 'redux-react-session';
import { push } from 'react-router-redux';

import sessionApi from '../api/sessionApi';

export const signUp = user =>
  dispatch =>
    sessionApi.signUp({ user }).then((response) => {
      sessionService.saveUser(response.user)
        .then(() => dispatch(push('/')));
    }).catch((err) => {
      throw new SubmissionError(err.errors);
    });
