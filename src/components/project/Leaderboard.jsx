import React, {Component} from 'react';

/*


*/

class Leaderboard extends Component{
	render(){
		return(
			<table className="Leaderboard">
				<tr>
					<th>Miku</th>
					<th>902 pts</th>
				</tr>
				<tr>
					<td>Esteban</td>
					<td>119 pts</td>
				</tr>
				<tr>
					<td>John</td>
					<td>80 pts</td>
				</tr>
				<tr>
					<td>Luigi</td>
					<td>5 pts</td>
				</tr>
			</table>
			)
	}
}

export default Leaderboard;