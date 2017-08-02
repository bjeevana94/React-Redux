import React from 'react';
import ReactDOM from "react-dom"
import '../App.css';
import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Stats from '../components/Stats';

var AddPlayerForm = React.createClass({
    getInitialState : function(){
      return {
        name : " ",
      }
    },

    onchange : function(e){
      console.log(this.state.name)
      this.setState({name : e.target.value})
    },

    onsubmit : function(e){
      e.preventDefault();
      this.props.onAdd(this.state.name);
      this.setState({name: " "})
    },

    render: function(){
      return (
          <div className = "add-player-form">
          <form onSubmit = {this.onsubmit}>
            <input type = "text" value = {this.state.name} onChange = {this.onchange}/>
            <input type = "submit" value= "Add Player"/>
          </form>
          </div>
      );
    }
});

function Header(props){
  return (
      <div className = "header">
          <Stats splayers = {props.players}/>
          <h1> {props.title}</h1>
          <Stopwatch/>
      </div>
    );
}

Header.propTypes = {
  title : React.PropTypes.string.isRequired,
}

function Player(props){
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



var nextId = 4;
var Scoreboard = React.createClass({

  getInitialState : function(){
    return {
      players : this.props.initalPlayers,
    }
  },

  onScoreChange : function(index,delta){
    console.log(index,delta);
    this.state.players[index].score += delta;
    this.setState(this.state)
  },

  addNewPlayer : function(name){
      this.state.players.push({
        name : name,
        score: 0,
        id: nextId
      });
      nextId += 1;
      this.setState(this.state)
  },

  removePlayer: function(index){
    this.state.players.splice(index,1);
    this.setState(this.state)
  },

  render: function(){
    return (
      <div className="scoreboard">
        <Header title = "score board" players={this.state.players}/>
            {this.state.players.map(function(player,index)
              {
                return ( 
                  <Player name = {player.name} score = {player.score} key = {player.id}
                  onremove = {function(){this.removePlayer(index)}.bind(this)} 
                  onScoreChange = {function(delta){this.onScoreChange(index,delta)}.bind(this)}/>
                );
              }.bind(this))}
        <AddPlayerForm onAdd ={this.addNewPlayer}/>
      </div>
    );
  },
});

export default Scoreboard;
