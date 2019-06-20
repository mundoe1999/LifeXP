//Importing Library Components
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Importing Components
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardList from '../components/dashboard/BoardList';
import DashTable from '../components/dashboard/DashTable';

//Importing Actions
import { fetchAllBoardsThunk } from '../actions/boardActions';
import { fetchAllTasksThunk } from '../actions/taskActions';


class Dash extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userId: this.props.userId,
			data: ' '
		};
	}

	/*
	Call the respective thunks to connect to the backend database. Mapped at
	the called here
	*/
	componentWillMount() {
		console.log('fetching: ');
		this.props.fetchBoards();
		this.props.fetchTasks();
	}

	//componentDidMount and callBackendAPI connect the backend to the
	//I am not sure how necessary this is with an actual server deployment
	componentDidMount() {
		this.callBackendAPI()
			.then(res => this.setState({ data: res.express }))
			.catch(error => console.log(error));
	}

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
		return (
			<div>
				<div className="TopContainer">
					<NavBar />
					<div className="DashboardPad">
						<TitleDesc />
						<BoardList boards={this.props.boards} />
					</div>
				</div>
				<div className="DashboardPad">
					<h1>my tasks</h1>
					<DashTable tasks={this.props.tasks} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	boards: state.boards.items,
	tasks: state.tasks.items,
	newBoard: state.boards.item
});

function mapDispatch(dispatch) {
	return {
		fetchBoards: () => dispatch(fetchAllBoardsThunk()),
		fetchTasks: () => dispatch(fetchAllTasksThunk())
	}
}


export default connect(mapStateToProps, mapDispatch)(Dash);
