import { SubmissionError } from 'redux-form/immutable';
import { sessionService } from 'redux-react-session';
import { push } from 'react-router-redux';

import sessionApi from '../api/sessionApi';

export const signUp = user =>
  async (dispatch) => {
    try {
      const res = await sessionApi.signUp({ user });
      await sessionService.saveUser(res.user);
      dispatch(push('/'));
    } catch ({ errors }) {
      throw new SubmissionError(errors);
    }
  };
