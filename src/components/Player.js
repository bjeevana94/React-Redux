import React, {PropTypes} from 'react';
import Counter from './Counter'

const Player = props => {
  return (
      <div>
       <div className = "player">
        <div className = "player-name">
          <a className = "remove-player" onClick = {props.onremove}> x </a>
              {props.name} 
        </div> 
        <Counter score = {props.score} onChange = {props.onScoreChange}/>     
        </div>   
      </div>
  );
}

Player.propTypes = {
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name : React.PropTypes.string.isRequired,
    score : React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
}

export default Player;