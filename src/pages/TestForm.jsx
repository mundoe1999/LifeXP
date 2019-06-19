import React, {Component} from 'react';
import EditBoardForm from '../components/essentials/EditBoard'

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
      <EditBoardForm />
      <button onClick={this.goBack}>Cancel </button>
    </div>
    )
  }
}


export default TestForm;