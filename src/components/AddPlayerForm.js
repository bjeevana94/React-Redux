import React, {Component, PropTypes} from 'react';

class AddPlayerForm extends React.Component{
	state = {
		 name : " ",
	};

	onchange = (e) => {
      console.log(this.state.name)
      this.setState({name : e.target.value})
    }

    onsubmit = (e) => {
      e.preventDefault();
      this.props.onAdd(this.state.name);
      this.setState({name: " "})
    }

    render(){
      return (
          <div className = "add-player-form">
          <form onSubmit = {this.onsubmit}>
            <input type = "text" value = {this.state.name} onChange = {this.onchange}/>
            <input type = "submit" value= "Add Player"/>
          </form>
          </div>
      );
    }

}

export default AddPlayerForm;
   