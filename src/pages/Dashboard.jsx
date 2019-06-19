//Importing Library Components
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Importing Components
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardList from '../components/dashboard/BoardList';
import DashTable from '../components/dashboard/DashTable';

//Importing Actions
import { fetchBoards } from '../actions/boardActions';




// BoardCards will get replaced with BoardList when backend is ready

class Project extends Component{
	componentWillMount() {
		this.props.fetchBoards();
	}	

	render(){

    
		return (
			<div>
				<div className="TopContainer">
					<NavBar/>
					<div className="DashboardPad">
						<TitleDesc/>
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
  

export default connect(mapStateToProps, { fetchBoards })(Project);