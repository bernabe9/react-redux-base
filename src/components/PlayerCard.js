import React from 'react';
import { string } from 'prop-types';

const PlayerCard = ({ name, image, position }) => (
  <div className="player-card">
    <img src={image} alt={name} />
    <span>Player: </span>
    <span>{name}</span>
    <p>Position: {position}</p>
  </div>
);

PlayerCard.propTypes = {
  name: string.isRequired,
  image: string.isRequired,
  position: string.isRequired
};

export default PlayerCard;
