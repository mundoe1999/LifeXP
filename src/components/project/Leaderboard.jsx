import React, {Component} from 'react';

/*


*/

class Leaderboard extends Component{
	render(){
		let userList = this.props.users || [];
		userList.sort(function(a,b){
			return b["level"]-a["level"]
		});
		const scores = userList.map(element =>{
			return(
				<tr>
					<td>{element["username"]}</td>
					<td>{element["level"]}</td>
				</tr>
			)
		});
		return(
			<table className="Leaderboard">
				{scores}
			</table>
			)
	}
}

export default Leaderboard;