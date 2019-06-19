// WHEN IMPLEMENTING THIS, MAKE SURE YOU
// HAVE A BUTTON NAMED "ModalButton"!!
// Like this: <button id="ModalButton">Edit</button>

import React from 'react';
import AddUserForm from './AddUserForm'
import CreateTaskForm from './CreateTaskForm'

class Modal extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		var modal = document.getElementById("myModal");
		var btn = document.getElementById("ModalButton");
		var span = document.getElementsByClassName("ModalClose")[0];	

		btn.onclick = function(){
			modal.style.display = "block";
		}

		span.onclick = function(){
			modal.style.display = "none";
		}

		window.onclick = function(e){
			if(e.target == modal){
				modal.style.display = "none";
			}
		}
		modal.style.display = "none";
		console.log(this.loadForm);
	}

	render(){
		if(this.props.form == "task"){
			return(
				<div id="myModal" className="ModalContent">

					<div className="ModalHeader">
		    		<span className="ModalClose">&times;</span>
		    		<h2>Edit Task</h2>
		  		</div>

		  		<div className="ModalBody">
		    		<CreateTaskForm/>
		  		</div>

		  		<div className="ModalFooter">
			    	<h3><button id="save">Save changes</button></h3>
		 	 		</div>

				</div>
				)
		}
		if(this.props.form == "user"){
			return(
				<div id="myModal" className="ModalContent">

					<div className="ModalHeader">
		    		<span className="ModalClose">&times;</span>
		    		<h2>Edit Task</h2>
		  		</div>

		  		<div className="ModalBody">
		    		<AddUserForm/>
		  		</div>

		  		<div className="ModalFooter">
			    	<h3><button id="save">Save changes</button></h3>
		 	 		</div>

				</div>
				)
		}
	}
}

export default Modal;