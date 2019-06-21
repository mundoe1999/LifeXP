import React from 'react';

const DashTable = (props) => {
	const tasks = props.tasks.map((currentTask) =>
	<tr>
	<th>{currentTask.name}</th>
	<th>{currentTask.desc}</th>
	<th>{currentTask.difficulty}</th>
	<th> {currentTask.status}</th>
	</tr>
)
	return (
		<div>
			<table>
				<thead>
				<tr>
					<th>task name</th>
					<th>description</th>
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


export default DashTable;
