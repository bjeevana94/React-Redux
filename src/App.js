import React from 'react';
//import logo from './logo.svg';
import './App.css';

var arrPlayers = [
  {
    name: "Jim Hoskins",
    score: 30,
    id: 1
  },
  {
    name: "Jeevana Bommannagari",
    score: 35,
    id: 2
  },
  {
    name: "Big Boss",
    score: 21,
    id:3
  }
]

function Header(props){
  return (
      <div className = "header">
          <h1> {props.title}</h1>
      </div>
    );
}

Header.propTypes = {
  title : React.PropTypes.string.isRequired,
}

function Player(props){
  return (
      <div>
            {props.players.map(function(player){
              return(
                <div className = "player" key = {player.id}>
                  <div className = "player-name">
                    {player.name} 
                  </div> 
                  <Counter initial = {player.score}/> 
                </div>
              );           
            })}
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

var Counter = React.createClass({
  propTypes: {
    initial : React.PropTypes.number.isRequired,
  },

  getInitialState: function(){
      return {
        score : this.props.initial,
      }
  },
  increment: function(){
    this.setState({score: (this.state.score+1)})
  },

  decrement: function(){
    this.setState({score: (this.state.score-1)})
  },

  render: function(){
    return (
    <div className = "player-score">
        <div className = "counter">
          <button className = "counter-action decrement" onClick={this.decrement}> - </button>
          <div className= "counter-score"> {this.state.score} </div>
          <button className = "counter-action increment" onClick={this.increment}> + </button>
        </div>
    </div>
  );
  }
});


function App(){
  return (
    <div className="scoreboard">
        <Header title = "score board" />
        <Player players = {arrPlayers}/>
     </div>
    
  );
}


export default App;
