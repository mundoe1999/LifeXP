import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends Component{
	render(){
		return(
				<div className="TestContainer">
					<div className="DashboardPad">
						<h1 className="Centered">Welcome to LifeXP!</h1>
						<div className="FlexContainer">
							<div className="BoardCard Card ORANGE">
								<h2>A new way to tackle tasks!</h2>
							</div>
							<div className="BoardCard Card GREEN">
								<h2>Gain experience as you work!</h2>
							</div>
							<div className="BoardCard Card YELLOW">
								<h2>Start a board, add tasks, and start leveling up!</h2>
							</div>
						</div>
					</div>
					<h2 className="Centered"><Link to='/Login'>Log in here!</Link></h2>
				</div>
			)
	}
}

export default LandingPage;