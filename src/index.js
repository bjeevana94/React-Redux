import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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

ReactDOM.render(<App initalPlayers = {arrPlayers}/>, document.getElementById('container'));
registerServiceWorker();
