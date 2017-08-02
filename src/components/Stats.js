import React, {PropTypes} from 'react';

const Stats = props => {
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

export default Stats;