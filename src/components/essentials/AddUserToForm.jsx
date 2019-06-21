import React, { Component } from 'react';

//Eventually
import { connect } from 'react-redux';
import {fetchUserByNameThunk} from '../../actions/userActions';
import {addUserToBoardThunk} from '../../actions/boardActions'
import axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';

// NOTE:
// BoardId should be stored in our initial state
// UserId needs to be fetched from Board, and
// should display ALL users in that board, and be
// able to select one of them, or none

class AddUserToForm extends Component {

	constructor (props) {
		super(props);

		this.state = {
			username: "",
			redirect: false

		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitData = this.submitData.bind(this);
	}

	handleInputChange (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	async submitData (e) {
		e.preventDefault();


		//Use POST and STORE task
		let name = await axios.put(`/api/users/searchUsers`, this.state).then(res => res.data);
		console.log(name['id']);
		console.log(this.props.boardId);

		await this.props.addUserToBoard(this.props.boardId,name['id']);

		alert('Added '+name['username']+' to the board!');

		//Reset Component
		this.setState({
			name: "",
			redirect: true
		});

		//Redirect back to the board
		
	}

	render () {
		if(this.state.redirect){
			return (
        <Redirect to={`/dashboard/${this.props.user["id"]}`} />
      )
		}
		return (
    <div id = "UserForm">
    <form onSubmit={this.submitData} className="AddTask">
      <strong>Username:</strong>
      <br/>
      <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} required></input>
      <br/>

      <input type="submit" value="Add User"></input>
    </form>
    </div>


		)

	}

}
const mapStateToProps = state => ({
	boards: state.boards.items,
	user: state.users.item[0],
	search: state.users.searchUsers
});

const mapDispatchToProps = (dispatch) =>{
	return{
		findUser: (user) => dispatch(fetchUserByNameThunk(user)),
		addUserToBoard: (boardId,userId) => dispatch(addUserToBoardThunk(boardId,userId))
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddUserToForm));