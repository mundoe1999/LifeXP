import React from 'react';
import {Link} from 'react-router-dom';

const BoardCard = props => (
  <div className="BoardCard">
    `<Link to ={`/board/${props.board.id}`}>
      <span className='Card RED'>
      <h1>{props.board.name}</h1>
    	<h4>{props.board.desc}</h4>
      </span>
    </Link>`

  </div>

);

export default BoardCard;