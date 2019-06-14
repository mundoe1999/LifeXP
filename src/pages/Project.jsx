import React, { Component } from 'react';
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/project/TitleDesc';
import TaskCard from '../components/project/TaskCard'

class Project extends Component{

	render(){
		return (
			<div>
				<head>
					<link rel="stylesheet" type="text/css" href="../Style.css"/>
				</head>
				<NavBar/>
				<TitleDesc/>
				<TaskCard/><TaskCard/><TaskCard/>
			</div>
			)
	}
}

export default Project;