import React, { Component } from 'react';
import NavBar from '../components/essentials/NavBar';
import LoginForm from '../components/essentials/LoginForm';


class LoginComponent extends Component{
	render(){
		return (
			<div>
				<head>
					<link rel="stylesheet" type="text/css" href="../Style.css"/>
				</head>
				<NavBar/>
				<div>
					<LoginForm />
				</div>
			</div>
			)
	}
}

export default LoginComponent;