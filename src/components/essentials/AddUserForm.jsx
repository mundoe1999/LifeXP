import React, { Component } from 'react';

//Eventually
// import { connect } from 'react-redux';
// import axios from 'axios';

// NOTE:
// BoardId should be stored in our initial state
// UserId needs to be fetched from Board, and
// should display ALL users in that board, and be
// able to select one of them, or none

class CreateTaskForm extends Component {

	constructor (props) {
		super(props);

		this.state = {
			fname: "",
			lname: "",
			username: "",
			password: "",
			email: "",
			image: "",
			level: 0,

			displayErrorMessage: false
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitData = this.submitData.bind(this);
		this.buttonTest = this.buttonTest.bind(this);
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
		let newUser = {
			fname: this.state.fname,
			lname: this.state.lname,
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
			image: this.state.image,
			level: this.state.level
		}

		//Use POST and STORE task
		console.log(newUser);
	}

	buttonTest(){
		console.log("You pressed a button! Congratulations!");
	}

	render () {

		return (
		<div>
    	<div id = "TaskForm">

   			<form onSubmit={this.submitData} className="AddTask">

    			<strong>Username:</strong>
    			<br/>
    			<input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} required></input>

    		</form>
			</div>

    	<button id="search" onClick={this.buttonTest}>Search users</button>

    	<button id="add" onClick={this.buttonTest}>Add user to board</button>

    </div>
		)

	}

} 
export default CreateTaskForm;