import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardCard from '../components/dashboard/BoardCard';
import ProjTable from '../components/project/ProjTable';
import Leaderboard from '../components/project/Leaderboard';
import { fetchAllBoardsThunk } from '../actions/boardActions';
import { fetchAllTasksThunk } from '../actions/taskActions';
/*

*/
class Project extends Component{
	constructor(props) {
		super(props)
		this.state = {
			data: ' '
		};
	}


componentWillMount() {
	console.log('fetching: ');
	this.props.fetchBoards();
	this.props.fetchTasks();
}
	render(){
		console.log(this.props.id)
		return(
			<div>
				<head>
					<link rel="stylesheet" type="text/css" href="../Style.css"/>
				</head>
				<div className="TopContainer">
					<NavBar name="Rupert"/>
					<div className="ProjectPad">
							<div className="LeftElement">
								<TitleDesc/>
								<BoardCard board={{"id":"Robinson Family","body":"Test"}}/>
							</div>
							<div className="RightElement">
								<Leaderboard/>
							</div>
					</div>
					<br/>
					<footer>
					<ul>
						<li>+ Add User</li>
						<li>- Remove User</li>
						<li>+ Add Task</li>
					</ul>
					</footer>

				</div>

				<div className="DashboardPad">
					<h1>group tasks</h1>
					<ProjTable/>
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


export default connect(mapStateToProps, mapDispatch)(Project);
