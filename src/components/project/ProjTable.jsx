import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';


class ProjTable extends Component{

	render(){
		let taskList = this.props.tasks || [];
		const tasks = taskList.map(element =>{
			return(
				<tr>
					<td>{element["id"]}</td>
					<td>{element["name"]}</td>
					<td>{element["difficulty"]}</td>
					<td>{element["status"]}</td>
				</tr>
			)
		});
		console.log(taskList);
		return(
			<div>
				<table>
					<tr>
    				<th>assigned to</th>
    				<th>to-do</th>
 	 					<th>level</th>
 	 					<th>status</th>
							<th></th>
  					</tr>
						{tasks}
  				</table>
  			</div>
  			)
	}
}

export default ProjTable;