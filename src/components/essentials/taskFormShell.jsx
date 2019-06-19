import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTaskThunk } from '../../actions/taskActions';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const task = {
      name: this.state.name,
      desc: this.state.desc,
      image: this.state.image
    };
    this.props.newTask(task);
    console.log("adding: ", task.name, '\n', task.desc);
  }

  render() {
    return (
      <div>
        <h1>Add Task</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <br />
          <div>
            <label>Desc: </label>
            <br />
            <textarea
              name="desc"
              onChange={this.onChange}
              value={this.state.desc}
            />
          </div>
          <br />
          <div>
            <label>ImageUrl: </label>
            <br />
            <input
              type="text"
              name="image"
              onChange={this.onChange}
              value={this.state.image}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        <button type="delete">Delete</button>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		newTask: (taskToPost) => dispatch(addNewTaskThunk(taskToPost))
	}
}

//export default NewTaskForm;
export default connect(null, mapDispatchToProps)(NewTaskForm);
