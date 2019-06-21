import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {signInAction}  from '../../actions/authentication';

//Eventually
 import { connect } from 'react-redux';
 import { withRouter } from 'react-router-dom';

// import axios from 'axios';


class LoginForm extends Component {

	submit = (values) => {
		this.props.signInAction(values, this.props.history);
	}

	errorMessage() {
		if(this.props.errorMessage){
			return (<div className="infor-red">
			{this.props.errorMessage}
			</div>
			);
		}
	}

	render () {
		const { handleSubmit} = this.props;

		return (
    <div id = "loginForm">
    <form onSubmit={handleSubmit(this.submit)} className="signIn">
			<strong>Username</strong> <br/>
			<Field name = "username"
				component="input"
				type="text"
			/>
			<br/>
			<strong>Password</strong><br/>
			<Field name = "password"
				component="input"
				type="password"
			/>
			<br/>
			<button type="submit">Sign In</button>
    </form>
			{this.errorMessage}
    </div>
		)
	}
} 

function mapStateToProps(state){
	return {errorMessage: state.auth.error}
}

const reduxFormSignIn = reduxForm({
	form: 'signin'
})(LoginForm);
export default withRouter(connect(mapStateToProps,{signInAction})(reduxFormSignIn));