import React, { Component } from 'react';
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardCard from '../components/dashboard/BoardCard';
import DashTable from '../components/dashboard/DashTable';

// BoardCards will get replaced with BoardList when backend is ready

class Project extends Component{

	render(){
		return (
			<div>
				<head>
					<link rel="stylesheet" type="text/css" href="../Style.css"/>
				</head>
				<div className="TopContainer">
					<NavBar/>
					<div className="DashboardPad">
						<TitleDesc/>
						<div className="ScrollingFlexWrapper DisableScrollbars">
							<BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/>
						</div>
					</div>
				</div>
				<div className="DashboardPad">
					<h1>my tasks</h1>
					<DashTable/>
				</div>
			</div>
			)
	}
}

export default Project;