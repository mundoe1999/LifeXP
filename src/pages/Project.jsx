import React, { Component } from 'react';
import NavBar from '../components/essentials/NavBar';

class Project extends Component{
	render(){
		return (
			<div>
				<head>
					<link rel="stylesheet" type="text/css" href="../Style.css"/>
				</head>
				<NavBar/>
				<div>
					Test!
				</div>
			</div>
			)
	}
}

export default Project;