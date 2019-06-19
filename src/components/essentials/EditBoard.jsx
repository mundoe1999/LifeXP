import React, { Component } from 'react';

//Eventually
// import { connect } from 'react-redux';
// import axios from 'axios';


class EditBoardForm extends Component {

	constructor (props) {
		super(props);
		//For STUB, should contain current
		//Information of Board
		this.state = {
			name: "STUB",
			desc: "STUB",
			image: "STUB"
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitData = this.submitData.bind(this);
	}

	handleInputChange (e) {
		console.log(e.target.value)
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitData (e) {
		e.preventDefault();

		//Creates temp board
		let newBoard = {
			name: this.state.name,
			desc: this.state.desc,
			image: this.state.image
		}

		//MAKE PUT REQUEST to EDIT BOARD
		console.log(newBoard);
	}

	render () {
		return (
    <div id = "STUBsomeIDHereSTUB">

    <form onSubmit={this.submitData} className="EditBoard">

      <strong>Name:</strong>
      <br/>
      <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} required></input>
      <br/>

			<strong>Description:</strong>
			<br/>
			<textarea name="desc" rows="10" cols="60" value={this.state.desc} onChange={this.handleInputChange}>
			</textarea> 
			<br/>



      <input type="submit" value="Confirm"></input>
    </form>
    </div>


		)

	}

} 
export default EditBoardForm;