import * as types from './actionTypes';
import playerApi from '../api/playerApi';

export const getPlayersSuccess = players => ({
  players,
  type: types.GET_PLAYERS_SUCCESS
});

export const getPlayers = () =>
  async (dispatch) => {
    const players = await playerApi.getPlayers();
    dispatch(getPlayersSuccess(players));
  };
