import React, {Component} from 'react';
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardCard from '../components/dashboard/BoardCard';
import ProjTable from '../components/project/ProjTable';
import Leaderboard from '../components/project/Leaderboard';

/*

*/
class Project extends Component{
/*
	componentWillMount(){
		this.props.fetchBoards();
	}
*/
	render(){
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

export default Project;