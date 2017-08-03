import React, {PropTypes} from 'react';


const Counter = props => {
  return (
    <div className = "player-score">
        <div className = "counter">
          <button className = "counter-action decrement" onClick ={ () => props.onScoreChange(props.index, -1)}> - </button>
          <div className= "counter-score"> {props.score} </div>
          <button className = "counter-action increment" onClick ={ () => props.onScoreChange(props.index, 1)}> + </button>
        </div>
    </div>
  );
}

export default Counter;