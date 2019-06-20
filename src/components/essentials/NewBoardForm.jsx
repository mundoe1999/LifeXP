import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNewBoardThunk } from '../../actions/boardActions';
import { Redirect, withRouter } from 'react-router-dom'

class NewBoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      redirect: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    console.log(this.state.redirect)
    const board = {
      name: this.state.name,
      desc: this.state.desc,
      image: this.state.image
    };
    //need to await or else the database isn't updated quickly enough
    await this.props.newBoard(board);
    //need to await here otherwise redirect will not occur
    await this.setState({ redirect: true })

  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to='/' />
      )
    }
    else {
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    newBoard: (boardToPost) => dispatch(addNewBoardThunk(boardToPost))
  }
}

//export default NewBoardForm;
export default withRouter(connect(null, mapDispatchToProps)(NewBoardForm));
