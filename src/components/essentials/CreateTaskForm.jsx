import React, { Component } from 'react';

//Eventually
import { connect } from 'react-redux';
import {addNewTaskThunk} from '../../actions/taskActions';
import axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';

// NOTE:
// BoardId should be stored in our initial state
// UserId needs to be fetched from Board, and
// should display ALL users in that board, and be
// able to select one of them, or none

class CreateTaskForm extends Component {

	constructor (props) {
		super(props);

		this.state = {
			name: "",
			desc: "",
			status: "NOTSTARTED",
			difficulty: "EASY",
			color: 'RED',
			userId: null
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitData = this.submitData.bind(this);
	}

	handleInputChange (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitData (e) {
		e.preventDefault();

		//Creates Task
		let newTask = {
			name: this.state.name,
			desc: this.state.desc,
			status: this.state.status,
			difficulty: this.state.difficulty,
			color: this.state.color,
			boardId: this.props.match.params.boardId,
			userId: this.state.userId
		}

		//Use POST and STORE task
		let aNewTask = this.props.addTask(newTask);
		console.log(aNewTask);

		//Reset Component
		this.setState({
			name: "",
			desc: "",
			status: "NOTSTARTED",
			difficulty: "EASY",
			color: 'RED',
			boardId: 1,
			userId: null
		});
	}

	render () {

		return (
    <div id = "TaskForm">

    <form onSubmit={this.submitData} className="AddTask">

      <strong>Name:</strong>
      <br/>
      <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} required></input>
      <br/>

			<strong>Description:</strong>
			<br/>
			<textarea name="desc" rows="10" cols="60" value={this.state.desc} onChange={this.handleInputChange}>
			</textarea> 
			<br/>

      <strong>Difficulty:</strong> 
      <br/>
			<select name="difficulty" onChange={this.handleInputChange}>
				<option value='EASY' selected>Easy</option>
				<option value='MEDIUM'>Medium</option>
				<option value='HARD'>Hard</option>
			</select>
      <br/>

			<strong>Color:</strong> 
      <br/>
			<select name="color" onChange={this.handleInputChange}>
				<option value='RED' selected>Red</option>
				<option value='BLUE'>Blue</option>
				<option value='ORANGE'>Orange</option>
				<option value='YELLOW'>Yellow</option>
				<option value='GREEN'>Green</option>
			</select>
      <br/>


      <input type="submit" value="Create Task"></input>
    </form>
    </div>


		)

	}

}
const mapStateToProps = state => ({
	boards: state.boards.items,
	users: state.users.items
});

const mapDispatchToProps = (dispatch) =>{
	return{
		addTask: (taskToAdd) => dispatch(addNewTaskThunk(taskToAdd)) 
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm));