import React from 'react';
import {Link} from 'react-router-dom';

// Text in h1 and h4 will be replaced when backend is ready
//STUB
const BoardCard = props => (
  <div className="BoardCard">
    <Link to='board/numberHERE'>
      <span className='Card RED'>
      <h1>{props.board.id}</h1>
    	<h4>{props.board.body}</h4>
      </span>
    </Link>

  </div>

);

export default BoardCard;