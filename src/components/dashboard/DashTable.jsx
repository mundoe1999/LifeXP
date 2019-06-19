import React from 'react';
//import { connect } from 'react-redux';

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


export default DashTable;