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
