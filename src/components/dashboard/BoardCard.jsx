import React from 'react';
import {Link} from 'react-router-dom';

// Text in h1 and h4 will be replaced when backend is ready
//STUB
const BoardCard = props => (
  <div className="BoardCard">
    {/* <Link to='board/numberHERE'> 
   <Link to={/ideas/${this.props.testvalue}}>{

 <td><Link to={`/Students/${student["id"]}`}>Click</Link></td>


  */}
    `<Link to ={`/board/${props.board.id}`}>
      <span className='Card RED'>
      <h1>{props.board.name}</h1>
  	<h4>{props.board.desc}</h4>
      </span>
    </Link>`

  </div>

);

export default BoardCard;