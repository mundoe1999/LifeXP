import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewBoardThunk, addUserToBoardThunk } from '../../actions/boardActions';
import { Redirect, withRouter } from 'react-router-dom'

class NewBoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      redirect: false,
      boardId: -1
    };

    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onCancel(e) {
    this.setState({ redirect:true });
  }

  async onSubmit(e) {
    e.preventDefault();
    const board = {
      name: this.state.name,
      desc: this.state.desc,
      image: this.state.image
    };
    console.log(board);
    let newBoard = await this.props.newBoard(board);
    console.log("viard",newBoard);
    let id = newBoard["payload"]["id"];
    await this.props.addUserToBoard(id, this.props.user["id"]);
    await this.setState({ redirect: true,boardId:id });




  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={`/dashboard/${this.props.user["id"]}`} />
      )
    }
    else {
      return (
        <div>
          <h1 style={{"text-align":"center"}}>Add Board</h1>
          <form onSubmit={this.onSubmit} style={{"text-align":"center"}}>
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
            <button onClick={this.onCancel}>Cancel</button>
            <button type="submit">Submit</button>

          </form>
        </div>
      );
    }
  }
}
const mapProps = state =>(
{
  user: state.users.item[0]
}
)


const mapDispatchToProps = (dispatch) => {
  return {
    newBoard: (boardToPost) => dispatch(addNewBoardThunk(boardToPost)),
    addUserToBoard: (boardId,userId) => dispatch(addUserToBoardThunk(boardId,userId))
  }
}

//export default NewBoardForm;
export default withRouter(connect(mapProps, mapDispatchToProps)(NewBoardForm));
