import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNewBoardThunk } from '../../actions/boardActions';

class NewBoardForm extends Component {
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

    const board = {
      name: this.state.name,
      desc: this.state.desc,
      image: this.state.image
    };
    this.props.newBoard(board);
  }

  render() {
    return (
      <div>
        <h1>Add Board</h1>
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		newBoard: (boardToPost) => dispatch(addNewBoardThunk(boardToPost))
	}
}

//export default NewBoardForm;
export default connect(null, mapDispatchToProps)(NewBoardForm);
