import React, {Component} from 'react';


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
		this.setState({
			title: "my boards",
			desc: ""
		});
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