import React, { Component } from 'react';
import { addNewUserThunk } from '../../actions/userActions'
//Eventually
import { connect } from 'react-redux';


class SignupForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            displayErrorMessage: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitData = this.submitData.bind(this);
    }

    handleInputChange(e) {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitData(e) {
        e.preventDefault();

        const user = {
            fname: this.state.fname,
            lname: this.state.lname,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            image: this.state.image,
            level: this.state.level
        };
        this.props.newUser(user);

        console.log("*Added!", user.username, user.email);
    }

    render() {
        return (
            <div id="loginForm">

                <form onSubmit={this.submitData} className="signIn">
                <strong>First Name:</strong>
                    <br />
                    <input type="text" name="fname" value={this.state.fname} onChange={this.handleInputChange}></input>
                    <br />
                    <strong>Last Name:</strong>
                    <br />
                    <input type="text" name="lname" value={this.state.lname} onChange={this.handleInputChange}></input>
                    <br />
                    <strong>Username:</strong>
                    <br />
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}></input>
                    <br />
                    <strong>Password:</strong>
                    <br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
                    <br />
                    <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}></input>
                    <br />
                    <input type="submit" value="Signup"></input>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
	return {
		newUser: (userToCreate) => dispatch(addNewUserThunk(userToCreate))
	}
}

//export default NewBoardForm;
export default connect(null, mapDispatchToProps)(SignupForm);