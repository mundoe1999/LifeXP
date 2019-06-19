import React, { Component } from 'react';

//Eventually
// import { connect } from 'react-redux';
// import axios from 'axios';


class CreateTaskForm extends Component {

	constructor (props) {
		super(props);

		this.state = {
			name: "",
			desc: "",
			status: "NOTSTARTED",
			difficulty: "EASY",
			color: 'RED',
			boardId: 1,
			userId: 1,

			displayErrorMessage: false
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitData = this.submitData.bind(this);
	}

	handleInputChange (e) {
		console.log(e.target.value)
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitData (e) {
		e.preventDefault();

		//Creates Task
		let newTask = {
			name: this.state.name,
			desc: this.state.desc,
			status: this.state.status,
			difficulty: this.state.difficulty,
			color: this.state.color,
			boardId: this.state.boardId,
			userId: this.state.userId
		}

		//Should Call the store and add this to that board
	}

	render () {
		return (
    <div id = "TaskForm">

    <form onSubmit={this.submitData} className="signIn">

      <strong>Name:</strong>
      <br/>
      <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} required></input>
      <br/>

			<strong>Description:</strong>
			<br/>
			<textarea name="desc" rows="10" cols="60" value={this.state.desc} onChange={this.handleInputChange}>
			</textarea> 
			<br/>

      <strong>Difficulty:</strong> 
      <br/>
			<select name="difficulty" onChange={this.handleInputChange}>
				<option value='EASY' selected>Easy</option>
				<option value='MEDIUM'>Medium</option>
				<option value='HARD'>Hard</option>
			</select>
      <br/>

			<strong>Color:</strong> 
      <br/>
			<select name="color" onChange={this.handleInputChange}>
				<option value='RED' selected>Red</option>
				<option value='BLUE'>Blue</option>
				<option value='ORANGE'>Orange</option>
				<option value='YELLOW'>Yellow</option>
				<option value='GREEN'>Green</option>
			</select>
      <br/>


      <input type="submit" value="Sign in"></input>
    </form>
    </div>


		)

	}

} 
export default CreateTaskForm;