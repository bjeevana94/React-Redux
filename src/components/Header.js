import React, {PropTypes} from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = props => {
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

export default Header;