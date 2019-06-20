//Importing Library Components
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Importing Components
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardList from '../components/dashboard/BoardList';
import DashTable from '../components/dashboard/DashTable';
import { Redirect, withRouter } from 'react-router-dom'


//Importing Actions
import { fetchAllBoardsThunk } from '../actions/boardActions';
import { fetchAllTasksThunk } from '../actions/taskActions';
import { fetchUserThunk } from '../actions/userActions';


class Dash extends Component {
	constructor (props) {
		super(props);

		this.state = {
			data: "",
			user: [{
				boards: [],
				id: "",
				fname: "",
				lname: "",
				username: "",
				password: "",
				level: "",
				tasks: []
			}]
		}
//for edit later
		// this.handleInputChange = this.handleInputChange.bind(this);
		// this.submitData = this.submitData.bind(this);
	}


	async componentDidMount() {
		//necessary to connect the back to the front
		this.callBackendAPI()
			.then(res => this.setState({ data: res.express }))
			.catch(error => console.log(error));

		const { match, location, history } = this.props
		//also very hacky but necessary because the render happens too fast
		//causing the array indexing below to return undefined
		//and crash the page otherwise. Looking into real fix
		console.log("trying:", match.params.userId)
		await this.props.fetchUser(match.params.userId)
		await this.setState({
			user: this.props.user
		})


		this.props.fetchBoards();
	}

	//componentDidMount and callBackendAPI connect the backend to the
	//I am not sure how necessary this is with an actual server deployment
	//connects the backend with the frontend
	callBackendAPI = async () => {
		const response = await fetch('/');
		console.log("response: ", response)
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message)
		}
		return body;
	};

	render() {
		if (!this.props.user && !this.props.boards) return null
		else {
			console.log("----user: ", this.state.user);
			console.log("at 0", this.state.user[0].fname)

			return (
				<div>
					<div className="TopContainer">
						<NavBar name={this.state.user[0].fname}  />
						{/* <h2>{this.state.user[0].fname}, {this.state.user[0].lname}</h2> */}

						<div className="DashboardPad">
							<TitleDesc />

							<BoardList boards={this.props.boards} />
						</div>
					</div>
					<div className="DashboardPad">
						<h1>my tasks</h1>
						<DashTable tasks={this.state.user[0].tasks} />
					</div>
				</div>
			)
		}
	}
}

const mapStateToProps = state => ({
	user: state.users.item,
	boards: state.boards.items,
	tasks: state.tasks.items,
	newBoard: state.boards.item
});

function mapDispatch(dispatch) {
	return {
		fetchBoards: () => dispatch(fetchAllBoardsThunk()),
		fetchTasks: () => dispatch(fetchAllTasksThunk()),
		fetchUser: (userId) => dispatch(fetchUserThunk(userId))
	}
}


export default withRouter(connect(mapStateToProps, mapDispatch)(Dash));
