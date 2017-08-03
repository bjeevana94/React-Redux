import React, {Component, PropTypes} from 'react';

class AddPlayerForm extends React.Component{
	state = {
		 name : " ",
	};

	onchange = (e) => {
      console.log(this.state.name)
      this.setState({name : e.target.value})
    }

    addNewPlayer = (e) => {
      e.preventDefault();
      this.props.addNewPlayer(this.state.name);
      this.setState({name: " "})
    }

    render(){
      return (
          <div className = "add-player-form">
          <form onSubmit = {this.addNewPlayer}>
            <input type = "text" value = {this.state.name} onChange = {this.onchange}/>
            <input type = "submit" value= "Add Player"/>
          </form>
          </div>
      );
    }

}

export default AddPlayerForm;
   