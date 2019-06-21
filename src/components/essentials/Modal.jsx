// WHEN IMPLEMENTING THIS, MAKE SURE YOU
// HAVE A BUTTON NAMED "ModalButton"!!
// Like this: <button id="ModalButton">Edit</button>

import React from 'react';
import CreateTaskForm from './CreateTaskForm';
import AddUserToForm from './AddUserToForm';

class Modal extends React.Component{
	componentDidMount(){
		var modal = document.getElementById("myModal");
		var btn = document.getElementsByClassName("ModalButton");
		var span = document.getElementsByClassName("ModalClose")[0];	

		btn[0].onclick = function(){
			modal.style.display = "block";
		}
		btn[1].onclick = function(){
			modal.style.display = "block";
		}

		span.onclick = function(){
			modal.style.display = "none";
		}

		window.onclick = function(e){
			if(e.target === modal){
				modal.style.display = "none";
			}
		}
		modal.style.display = "none";
	}

render(){
	let thing = this.props.display[0];
	console.log('thing is',thing);
	let whatDisplay = '';
	if(thing === 'addUser'){
		whatDisplay = <AddUserToForm boardId={this.props.boardId}/>
	} else if(thing === 'addTask'){
		whatDisplay = <CreateTaskForm boardId={this.props.boardId} userId={this.props.userId}/>
	}
	return(
		<div id="myModal" className="ModalContent">

			<div className="ModalHeader">
    		<span className="ModalClose">&times;</span>
    		<h2>Add a Thing</h2>
  		</div>

  		<div className="ModalBody">
			{whatDisplay}
  		</div>

  		<div className="ModalFooter">
 	 		</div>

		</div>
		)
	}
}

export default Modal;