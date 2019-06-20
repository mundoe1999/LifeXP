import React, { Component } from 'react';

//Eventually
// import { connect } from 'react-redux';
// import axios from 'axios';


class LoginForm extends Component {

	constructor (props) {
		super(props);

		this.state = {
			userName: "",
			password: "",
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

		//Redux call to login

		//If successful, should return a user
		//otherwise, display error message?
	}

	render () {
		return (
    <div id = "loginForm">

    <form onSubmit={this.submitData} className="signIn">
      <strong>Username:</strong>
      <br/>
      <input type="text" name="userName" value={this.state.userName} onChange={this.handleInputChange}></input>
      <br/>
      <strong>Password:</strong> 
      <br/>
      <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
      <br/>
      <input type="submit" value="Sign in"></input>
    </form>
    </div>


		)

	}

} 
export default LoginForm;