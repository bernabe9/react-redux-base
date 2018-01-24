import React, { Component } from 'react';
import PlayerCard from '../components/PlayerCard';

class PlayersPage extends Component {
  constructor() {
    super();

    this.state = { players: [] };
  }

  componentWillMount() {
    debugger;
    const request = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    const url = 'https://private-9a4624-rootstrapreact.apiary-mock.com/players';
    fetch(url, request)
      .then(response =>
        response.json().then((players) => { this.setState({ players }); }));
  }

  render() {
    const { players } = this.state;

    return (
      <div className="players-list">
        {players.length === 0 && <p>Loading players...</p>}
        {players.map(player =>
          <PlayerCard key={player.id} {...player} />)
        }
      </div>
    );
  }
}

export default PlayersPage;
