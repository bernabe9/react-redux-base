import { SubmissionError } from 'redux-form/immutable';
import { sessionService } from 'redux-react-session';

import sessionApi from '../api/sessionApi';

export const login = user =>
  async () => {
    try {
      const res = await sessionApi.login({ user });
      await sessionService.saveUser(res.user);
    } catch (err) {
      throw new SubmissionError({
        _error: err.errors[0]
      });
    }
  };

export const logout = () =>
  async () => {
    try {
      await sessionApi.logout();
      sessionService.deleteSession();
      sessionService.deleteUser();
    } catch (err) {
      throw (err);
    }
  };
