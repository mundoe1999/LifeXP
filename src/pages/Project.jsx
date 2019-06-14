import React, { Component } from 'react';
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/project/TitleDesc';

class Project extends Component{
	render(){
		return (
			<div>
				<head>
					<link rel="stylesheet" type="text/css" href="../Style.css"/>
				</head>
				<NavBar/>
				<TitleDesc/>
			</div>
			)
	}
}

export default Project;