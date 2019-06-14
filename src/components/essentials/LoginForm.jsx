import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


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
		console.log("*Added!");
	}

	render () {
		return (
			<div className = "editForm-wrapper">
				<h1>Log In</h1>

				<div className = "editForm form">
					<div className = "input_wrapper">
						<label className = "add_item_label" htmlFor = "userName">
							Username:
						</label>
						<input type = "text" name = "userName" onChange = { this.handleInputChange } />
					</div>

					<div className = "input_wrapper">
						<label className = "add_item_label" htmlFor = "password">
							Password:
						</label>
						<input type = "text" name = "password" onChange = { this.handleInputChange } />
					</div>
					<div className = "btn_controls_wrapper sm">
						{ (this.state.displayErrorMessage) 
							&& (
							<p className = "error_sm">
								Please Fill All Fields
							</p>
							) 
						}
						<button type = "submit" onClick = { this.submitData } className = "btn_link">Login</button>
					</div>
				</div>
			</div>

		)

	}

}

// null is passed in since we don't use mapStateToProps
// we don't care about adding this component's state to the props 
export default LoginForm;