import React, { Component } from 'react';
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardCard from '../components/dashboard/BoardCard'

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
						<div class ="ScrollingFlexWrapper DisableScrollbars">
							<BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/><BoardCard/>
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