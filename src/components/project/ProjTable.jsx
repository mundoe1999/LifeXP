import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteTaskThunk} from '../../actions/taskActions';


class ProjTable extends Component{

	constructor(props){
		super(props);
		this.completeTask = this.completeTask.bind(this);
		this.state = {
			redirect: false
		}
	}

	completeTask = (id) => {
		console.log(id);
		this.props.compTask(id);
		this.setState({
			redirect: true
		})
	}

	render(){
		if(this.state.redirect){
			return(
			<Redirect to={`/board/${this.props.match.params.boardId}`} />
			)
		}
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


export default withRouter(connect(null, mapDispatchToProps)(ProjTable));