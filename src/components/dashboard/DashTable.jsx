import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DashTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: ' '
		};
	}

	render() {
		const tasks = this.props.tasks.map((currentTask) =>
			<tr>
			<th>{currentTask.name}</th>
			<th>{currentTask.desc}</th>
			<th></th>
			<th> {currentTask.status}</th>
			</tr>
		)
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>board</th>
							<th>to-do</th>
							<th>level</th>
							<th>status</th>
						</tr>
					</thead>
					<tbody>
					{tasks}
					</tbody>

				</table>
			</div >
		)
	}
}

export default DashTable;



/*					<table>
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

const DashTable = (props) => (
	<table>
		<thead>
			<tr>
				<th>board</th>
				<th>to-do</th>
				<th>Difficulty</th>
				<th>status</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Robinson Family</th>
				<th>Clean the Floors</th>
				<th>Hard</th>
				<th>Not Started</th>
				<th>Edit</th>
			</tr>
		</tbody>
	</table>
);

					{
           				this.props.allTasks.map((task) => {
              				return(
                				<tr>
                 					<td>{task['board']}</td>
               				   		<td>{task['todo']}</td>
                					<td>{task['level']}</td>
                					<td>{task['status']}</td>
               					</tr>
                
            				)
            			})
        			}
*/
