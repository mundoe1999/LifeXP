import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardCard from '../components/dashboard/BoardCard';
import ProjTable from '../components/project/ProjTable';
import Leaderboard from '../components/project/Leaderboard';
import { fetchBoardThunk } from '../actions/boardActions';
import { fetchAllTasksThunk } from '../actions/taskActions';
import { withRouter } from 'react-router-dom';
import Modal from '../components/essentials/Modal';
/*

*/

class Project extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: ' ',
			board: ' ',
			boardId: -1,
			showModal: false,
			whatModalDisplay: ''
		};

		this.toggleModal = this.toggleModal.bind(this);
	}
	componentWillMount() {
		this.props.fetchBoard(this.props.match.params.boardId);
		this.props.fetchTasks();

	}

	toggleModal(e){
		this.setState({
			showModal: !this.state.showModal,
			whatModalDisplay: [e.target.name]
		})
		console.log("Change!");
	}

	render() {
		return (
			<div>
				<div className="TopContainer">
					<NavBar name={this.props.user["fname"]} daLink={this.props.user["id"]} />
					<div className="ProjectPad">
						<div className="LeftElement">
							<TitleDesc />
							<BoardCard board={{ "name": this.props.board["name"], "desc": this.props.board["desc"] }} />
						</div>
						<div className="RightElement">
							<Leaderboard users={this.props.board["users"]}/>
						</div>
					</div>
					<br />
					<footer>
						<ul>
							<li><button className="ModalButton" name="addUser" onClick={this.toggleModal}>+ Add User</button></li>
							<li>- Remove User</li>
							<li><button className="ModalButton" name="addTask" onClick={this.toggleModal}>+ Add Task</button></li>
						</ul>
					</footer>

				</div>

				<div className="DashboardPad">
					<h1>group tasks</h1>
					<ProjTable tasks = {this.props.board["tasks"]}/>
				</div>
				<Modal boardId={this.props.match.params.boardId} display={this.state.whatModalDisplay}/>
			</div>
		)
	}
}

const mapStateToProps = state => (
	{
		board: state.boards.item,
		user: state.users.item[0]
	});

function mapDispatch(dispatch) {
	return {
		fetchBoard: (id) => dispatch(fetchBoardThunk(id)),
		fetchTasks: () => dispatch(fetchAllTasksThunk())
	}
}


export default withRouter(connect(mapStateToProps, mapDispatch)(Project));
