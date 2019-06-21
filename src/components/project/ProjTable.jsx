import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteTaskThunk} from '../../actions/taskActions';


class ProjTable extends Component{

	constructor(props){
		super(props);
		this.completeTask = this.completeTask.bind(this);
	}

	completeTask = (id) => {
		console.log(id);
		this.props.compTask(id);
	}

	render(){
		let taskList = this.props.tasks || []; 
		const tasks = taskList.map(element => {
			return(
				<tr>
					<td>{element.userId}</td>
					<td>{element.name}</td>
					<td>{element.difficulty}</td>
					<td>{element.status}</td>
					<td><button onClick={() => this.completeTask(element.id)}>COMPLETE</button></td>
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

const mapDispatchToProps = (dispatch) => {
  return {
    compTask: (id) => dispatch(deleteTaskThunk(id)),
  }
}


export default connect(null, mapDispatchToProps)(ProjTable);