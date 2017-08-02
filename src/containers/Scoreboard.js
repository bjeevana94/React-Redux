import React, {Component} from 'react';
import ReactDOM from "react-dom"
import '../App.css';
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';

var nextId = 4;
class Scoreboard extends React.Component{

    state = {
      players : this.props.initalPlayers,
    };

  onScoreChange = (index,delta) => {
    console.log(index,delta);
    this.state.players[index].score += delta;
    this.setState(this.state)
  }

  addNewPlayer = (name) => {
      this.state.players.push({
        name : name,
        score: 0,
        id: nextId
      });
      nextId += 1;
      this.setState(this.state)
  }

  removePlayer = (index) => {
    this.state.players.splice(index,1);
    this.setState(this.state)
  }

  render(){
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
  }
}

export default Scoreboard;
