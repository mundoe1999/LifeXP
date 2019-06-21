import React, { Component } from 'react';
import { addNewUserThunk, fetchAllUsersThunk } from '../../actions/userActions'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import {signInAction}  from '../../actions/authentication';


class SignupForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userId: -1
      }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitData = this.submitData.bind(this);
    }

    handleInputChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    componentWillMount() {
      this.props.fetchUsers();
    }

    async submitData(e) {
        e.preventDefault();
        const user = {
            fname: this.state.fname,
            lname: this.state.lname,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            image: this.state.image,
            level: this.state.level,
            redirect: false
        };

        let newUser = await this.props.newUser(user);
        let id = newUser["id"];
       // await this.props.signInAction({"username":this.state.username,"password":this.state.password});
        await this.setState({
            userId: id,
            redirect: true
        })
    }

    render() {
      if (this.state.redirect) {
        let id = this.state.userId;
        return (
          <Redirect to ={{
              pathname: `/login/`,
              state: {id: id}
          }} />
        )
      }
        else {
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

}

const mapStateToProps = state => ({
    boards: state.boards.items,
    users: state.users.items,
    newUser: state.users.item
});
const mapDispatchToProps = (dispatch) => {

    return {
        fetchUsers: () => dispatch(fetchAllUsersThunk()),
        newUser: (userToCreate) => dispatch(addNewUserThunk(userToCreate)),
        signInAction
    }
}

//export default NewBoardForm;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));