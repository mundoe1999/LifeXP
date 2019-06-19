import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CreateTaskForm from '../components/essentials/CreateTaskForm'

class TestForm extends Component{
  constructor(){
    super();
    this.goBack = this.goBack.bind(this);
  }
  goBack(e){
    e.preventDefault();
    window.history.back();
  }

  render(){
    return(
      <div>
      <h1>Create Board</h1>
      <CreateTaskForm />
      <button onClick={this.goBack}>Return </button>
    </div>
    )
  }
}


export default TestForm;