import api from './apiService';

class Player {
  static getPlayers() {
    return api.get('https://private-9a4624-rootstrapreact.apiary-mock.com/players', '');
  }
}

export default Player;
