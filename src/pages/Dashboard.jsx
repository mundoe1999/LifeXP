import React, { Component } from 'react';
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardCard from '../components/dashboard/BoardCard'
import {fetchBoards} from '../actions/boardActions';

class Project extends Component {

	componentWillMount() {
		this.props.fetchBoards();
	}

	render() {
		const boardItems = this.props.boards.map(board => (
			<div key={board.boardId}>
				<h3>{board.name}</h3>
				<h3>{board.desc}</h3>
			</div>
		))
		return (
			<div>
				<head>
					<link rel="stylesheet" type="text/css" href="../Style.css" />
				</head>
				<div className="TopContainer">
					<NavBar />
					<div className="DashboardPad">
						<TitleDesc />
						<div class="ScrollingFlexWrapper DisableScrollbars">
							{boardItems}
							<BoardCard /><BoardCard /><BoardCard /><BoardCard /><BoardCard /><BoardCard /><BoardCard /><BoardCard /><BoardCard /><BoardCard />
						</div>
					</div>
				</div>
				<div className="DashboardPad">
					<h1>my tasks</h1>
				</div>
			</div>
		)
	}
}

export default Project;