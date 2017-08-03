import React, {Component, PropTypes} from 'react';
import {render} from "react-dom";
import { bindActionCreators} from 'redux';
import '../App.css';
import { connect } from 'react-redux';
import * as PlayerActionCreator from '../actions/player'
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';

var nextId = 4;
class Scoreboard extends React.Component{

  static propTypes = {
    players : PropTypes.array.isRequired
  };

  render(){
    const {dispatch, players} = this.props;
    const addNewPlayer = bindActionCreators(PlayerActionCreator.addNewPlayer,dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreator.removePlayer,dispatch);
    const onScoreChange = bindActionCreators(PlayerActionCreator.onScoreChange,dispatch);

    const playerComponents = players.map((player, index) =>
        (
          <Player 
                  index = {index}
                  name = {player.name}
                  score = {player.score}
                  key = {player.name}
                  onremove = {removePlayer}
                  onScoreChange = {onScoreChange}
          />
        ));

    return (
      <div className="scoreboard">
        <Header title = "score board" players={players}/>
            {playerComponents}
        <AddPlayerForm addNewPlayer ={addNewPlayer}/>  
      </div>
    );
}
}

const mapStateProps = (state) => (
  {
    players: state
  }

);

export default connect(mapStateProps)(Scoreboard);
