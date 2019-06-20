import React, {Component} from 'react';
import NavBar from '../components/essentials/NavBar';

class LandingPage extends Component{
	render(){
		return(
				<div className="TestContainer">
					<NavBar/>
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
				</div>
			)
	}
}

export default LandingPage;