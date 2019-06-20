import React, { Component } from 'react';

//Eventually
 import { connect } from 'react-redux';
 import { Redirect, withRouter } from 'react-router-dom';
 import {login}  from '../../actions/userActions';
// import axios from 'axios';


class LoginForm extends Component {

	constructor (props) {
		super(props);

		this.state = {
			userName: "",
			password: "",
			loggedIn: false,
			id: -1
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

	async submitData (e) {
		e.preventDefault();

		let credentials = {
			username: this.state.userName,
			password: this.state.password
		}
		//Redux call to login
		console.log(credentials);
		let connection = await this.props.loggin(credentials);

		//If successful, should return a user
		//otherwise, display error message?
		if(typeof connection !== "undefined"){
			console.log(connection);
			console.log(connection["user"]["id"]);
			this.setState({loggedIn:true,id:connection["user"]["id"]});
			
		} else{
			alert("incorrect password or username");
		}
	}

	render () {
		if(this.state.loggedIn){return (<Redirect to ={`/user/`+this.state.id} />)}
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

function mapDispatch(dispatch) {
	return {
		loggin: (id) => dispatch(login(id))
	}
}
export default withRouter(connect(null,mapDispatch)(LoginForm));