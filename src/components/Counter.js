import React, {PropTypes} from 'react';


const Counter = props => {
  return (
    <div className = "player-score">
        <div className = "counter">
          <button className = "counter-action decrement" onClick ={function(){props.onChange(-1);}}> - </button>
          <div className= "counter-score"> {props.score} </div>
          <button className = "counter-action increment" onClick ={function(){props.onChange(1);}}> + </button>
        </div>
    </div>
  );
}

export default Counter;