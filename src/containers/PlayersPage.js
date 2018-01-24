import React, { Component } from 'react';
import { connect } from 'react-redux';

import PlayerCard from '../components/PlayerCard';
import { getPlayers } from '../actions/playerActions';

class PlayersPage extends Component {
  static loadData({ dispatch }) {
    return dispatch(getPlayers());
  }

  componentDidMount() {
    const { getPlayers } = this.props;
    getPlayers();
  }

  render() {
    const { players } = this.props;

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

const mapState = state => ({
  players: state.getIn(['player', 'players']).toJS()
});

const mapDispatch = dispatch => ({
  getPlayers: () => dispatch(getPlayers())
});

export default connect(mapState, mapDispatch)(PlayersPage);
