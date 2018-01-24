import Immutable from 'immutable';

import * as types from '../actions/actionTypes';

export const initialState = Immutable.Map({
  players: Immutable.List()
});

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLAYERS_SUCCESS: {
      const { players } = action;
      return state.set('players', Immutable.fromJS(players));
    }
    default: {
      return state;
    }
  }
};

export default playerReducer;
