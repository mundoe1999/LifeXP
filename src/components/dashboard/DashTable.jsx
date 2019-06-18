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

					// Insert the below code at end of table when backend is ready

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

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class DashTable extends Component{

	render(){
		return(
			<div>
				<table>
					<tr>
    					<th>board</th>
    					<th>to-do</th>
 	 					<th>level</th>
 	 					<th>status</th>
  					</tr>
  				</table>
  			</div>
  			)
	}
}

export default DashTable;