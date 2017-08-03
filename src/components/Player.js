import React, {PropTypes} from 'react';
import Counter from './Counter'

const Player = props => {
  return (
      <div>
       <div className = "player">
        <div className = "player-name">
          <a className = "remove-player" onClick = {() => props.onremove(props.index) }> x </a>
              {props.name} 
        </div> 
        <Counter index = {props.index} score = {props.score} onScoreChange = {props.onScoreChange}/>     
        </div>   
      </div>
  );
}



export default Player;