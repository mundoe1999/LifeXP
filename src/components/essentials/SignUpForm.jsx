import React, { Component } from 'react';
import { addNewUserThunk, fetchAllUsersThunk } from '../../actions/userActions'
//Eventually
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'


class SignupForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            userId: "",
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

    componentWillMount() {
        console.log('fetching users: ');
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

        await this.props.newUser(user);

        console.log("trying againL", this.props.users.length)
        //HACKY AF IDC LOL
        await this.setState({
            userId: this.props.users.length + 1,
            redirect: true
        })
        console.log("UserId:", this.state.userId)
        console.log("*Added!", user.id);
    }

    render() {
        if (this.state.redirect) {
            console.log("whynoredirect?", this.state.userId)
            return (
                <Redirect to ={`/${this.state.userId}`} />
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
        newUser: (userToCreate) => dispatch(addNewUserThunk(userToCreate))
    }
}

//export default NewBoardForm;
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);