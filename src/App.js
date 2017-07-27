import React from 'react';
//import logo from './logo.svg';
import './App.css';

function Stats(props){
  var length = props.splayers.length;
  var totalcount = props.splayers.reduce(function(total,player){
      return total+player.score;
  },0)
  return(
    <table className ="stats">
      <tbody>
        <tr>
          <td>Players</td>
          <td>{length}</td>
        </tr>
        <tr>
          <td>Score Count</td>
          <td>{totalcount}</td>
        </tr>
      </tbody>
    </table>
  );
}

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

var StopWatch = React.createClass({
  getInitialState : function(){
    return {
      running : false,
      displayTime : 0,
      previousTime : 0,
    }
  },

  componentDidMount: function(){
    this.interval = setInterval(this.onTick,100);
  },

  ComponentWillUnmount : function(){
    clearInterval(this.interval)
  },

  onTick : function(){
    if(this.state.running){
      var now = Date.now();
      this.setState({
        displayTime : (this.state.displayTime + (now - this.state.previousTime)),
        previousTime : now
      })
    }
  },

  onStart : function(){
    this.setState({
      running: true,
      previousTime : Date.now(),
      
    })
  },

  onStop : function(){
    this.setState({running: false})
  },

  onReset : function(){
    this.setState({
      displayTime : 0,
      previousTime : Date.now()
    })
  },

  render: function(){
    var buttonstate = this.state.running ? 
                      <button onClick = {this.onStop}>Stop</button> 
                      : <button onClick = {this.onStart}>Start</button>
    var second = Math.floor(this.state.displayTime / 1000);
    return (
      <div className ="stopwatch">
        <h2>Stopwatch</h2>
        <div className = "stopwatch-score">{second}</div>
        {buttonstate}
        <button onClick = {this.onReset}>Reset</button>
      </div>
      );
   }
});

function Header(props){
  return (
      <div className = "header">
          <Stats splayers = {props.players}/>
          <h1> {props.title}</h1>
          <StopWatch/>
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


function Counter(props){
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

var nextId = 4;
var App = React.createClass({

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

export default App;
