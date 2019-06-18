import React, { Component } from 'react';
import NavBar from '../components/essentials/NavBar';
import TitleDesc from '../components/dashboard/TitleDesc';
import BoardCard from '../components/dashboard/BoardCard'
import { fetchBoards } from '../actions/boardActions';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class Project extends Component{
	componentWillMount() {
		this.props.fetchBoards();
	  }	


	render(){
		const boardItems = this.props.boards.map(board => (
			<div key={board.id}>
				<BoardCard id = {board.id} body = {board.body}/>
			</div>
		));
		return (
			<div>
				<head>
					<link rel="stylesheet" type="text/css" href="../Style.css"/>
				</head>
				<div className="TopContainer">
					<NavBar/>
					<div className="DashboardPad">
						<TitleDesc/>
						<div class ="ScrollingFlexWrapper DisableScrollbars">
							{boardItems}
						</div>
					</div>
				</div>
				<div className="DashboardPad">
					<h1>my tasks</h1>
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