import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class ProjTable extends Component{

	render(){
		return(
			<div>
				<table>
					<tr>
    					<th>assigned to</th>
    					<th>to-do</th>
 	 					<th>level</th>
 	 					<th>status</th>
  					</tr>
  				</table>
  			</div>
  			)
	}
}

export default ProjTable;