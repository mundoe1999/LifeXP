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
					<table>
 						<tr>
    						<th>board</th>
    						<th>to-do</th>
 	 						<th>level</th>
 	 						<th>status</th>
  						</tr>
  						<tr>
    						<td>Test</td>
    						<td>play video games</td>
    						<td>easy</td>
    						<td>in-progress</td>
  						</tr>
  						<tr>
    						<td>Test</td>
    						<td>build rocket</td>
    						<td>hard</td>
    						<td>not started</td>
  						</tr>
  						<tr>
    						<td>Test 2</td>
    						<td>fight godzilla</td>
    						<td>hard</td>
    						<td>not started</td>
  						</tr>
  						<tr>
    						<td>Test 3</td>
    						<td>make potion</td>
    						<td>moderate</td>
    						<td>in-progress</td>
  						</tr>
					</table>
				</div>
			</div>
			)
	}
}

export default Project;