//Importing Library Components
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

//Importing Components
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardList from '../components/dashboard/BoardList';
import DashTable from '../components/dashboard/DashTable';

//Importing Actions
import { fetchAllBoards } from '../actions/boardActions';
import { async } from 'q';




// BoardCards will get replaced with BoardList when backend is ready

class Project extends Component{
	constructor(props){
		super(props)
		this.state={
			data: ' '
		};
	}
	componentWillMount() {
		console.log('fetching: ')
		this.props.fetchAllBoards();
	}	

componentDidMount(){
	this.callBackendAPI()
	.then(res=>this.setState({data:res.express}))
	.catch(error=>console.log(error));
}

callBackendAPI=async()=>{
	const response=await fetch('/');
	console.log("response: ", response)
	const body=await response.json();
	if(response.status!==200){
		throw Error(body.message)
	}
	return body;
};

	render(){

    
		return (
			<div>
				<div className="TopContainer">
					<NavBar/>
					<div className="DashboardPad">
						<TitleDesc/>
						{console.log(this.props.boards)}
            <BoardList boards={this.props.boards} />
					</div>
				</div>
				<div className="DashboardPad">
					<h1>my tasks</h1>
					<DashTable/>
				</div>
			</div>
			)
	}
}

Project.propTypes = {
	fetchBoards: PropTypes.func.isRequired,
	boards: PropTypes.array.isRequired,
	newPost: PropTypes.object
  };

  const mapStateToProps = state => ({
	boards: state.boards.items,
	newBoard: state.boards.item
  });
  

export default connect(mapStateToProps, { fetchAllBoards })(Project);