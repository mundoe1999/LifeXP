import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

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

	componentWillMount(){
		this.state.title = "Hey, dingus"
		this.state.desc = "This is a project board!"
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