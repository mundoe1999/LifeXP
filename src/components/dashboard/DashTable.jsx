import React from 'react';
import Modal from '../essentials/Modal';
//import { connect } from 'react-redux';

class DashTable extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
	return(
	<div>
		<table>
			<thead>
				<tr>
					<th>board</th>
					<th>to-do</th>
					<th>Difficulty</th>
					<th>status</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Robinson Family</th>
					<th>Clean the Floors</th>
					<th>Hard</th>
					<th>Not Started</th>
					<th><button id="ModalButton">Edit</button></th>
				</tr>
			</tbody>
		</table>
		<Modal/>
	</div>
	)}
}

export default DashTable;