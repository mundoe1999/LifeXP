//Importing Library Components
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Importing Components
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardList from '../components/dashboard/BoardList';
import DashTable from '../components/dashboard/DashTable';
import { withRouter } from 'react-router-dom'


//Importing Actions
import { fetchUserThunk } from '../actions/userActions';


class Dash extends Component {
	constructor (props) {
		super(props);

		this.state = {
			renderStuff: false
		}
//for edit later
		// this.handleInputChange = this.handleInputChange.bind(this);
		// this.submitData = this.submitData.bind(this);
	}


	async componentDidMount() {
		//necessary to connect the back to the front
		this.callBackendAPI()
			.then(res => this.setState({ data: res.express }))
			.catch(error => console.log(error));

		const { match } = this.props
		//also very hacky but necessary because the render happens too fast
		//causing the array indexing below to return undefined
		//and crash the page otherwise. Looking into real fix
		console.log("trying:", match.params.userId)
		await this.props.fetchUser(match.params.userId)
		await this.setState({
			renderStuff: true
		})
	}

	//componentDidMount and callBackendAPI connect the backend to the
	//I am not sure how necessary this is with an actual server deployment
	//connects the backend with the frontend
	callBackendAPI = async () => {
		const response = await fetch('/');
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message)
		}
		return body;
	};

	//					
	render() {
		console.log(this.state.user);
		if (this.props.user === undefined) return (
			<div>
				I don't exist!
			</div>
		)
		else {
			return (
				<div>
					<div className="TopContainer">
						<NavBar name={this.props.user["fname"]} daLink={this.props.user["id"]}  />

						<div className="DashboardPad">
							<TitleDesc />

							<BoardList boards={this.props.user["boards"]} />
						</div>
					</div>
					<div className="DashboardPad">
						<h1>my tasks</h1>
						<DashTable tasks={this.props.user["tasks"]} />
					</div>
				</div>
			)
		}
	}
}

const mapStateToProps = state => ({
	user: state.users.item[0],
	boards: state.boards.items,
	tasks: state.tasks.items,
	newBoard: state.boards.item
});

function mapDispatch(dispatch) {
	return {
		fetchUser: (userId) => dispatch(fetchUserThunk(userId))
	}
}


export default withRouter(connect(mapStateToProps, mapDispatch)(Dash));
