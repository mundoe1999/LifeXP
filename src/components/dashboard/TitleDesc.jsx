import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchBoards } from '../../actions/boardActions';


class TitleDesc extends Component{

	constructor(props){
		super(props);
		this.state={
			title: '',
			desc: ''
		}
	}

	componentDidMount(){
		// this.props.fetchTitleAndDesc();
		// Maybe fetchProjectInfo()?
	}

	//update with reduxy stuff
	componentWillMount(){
		this.state.title = "my boards"
		this.state.desc = ""
	}

	render(){
		return(
			<div>
				<h1>{this.state.title}</h1>
				<h4>{this.state.desc}</h4>
			</div>
			)
	}
}

export default TitleDesc;