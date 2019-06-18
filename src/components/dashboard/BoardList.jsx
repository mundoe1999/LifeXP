/*
// This will be added to the render function when backend is ready
<div>
   	{
    	this.props.allProjects.map((carddata) => {
      		return(
        		<BoardCard data={carddata} />
      		)
    	})
    }
</div>
*/

import React from 'react';
import {Link} from 'react-router-dom';
import BoardCard from './BoardCard';

const BoardList = (props) => (
	<div className = "ScrollingFlexWrapper DisableScrollbars">
    <div className="BoardCard">
      <Link to="/addBoard">
        <span className="Card GREEN" style={{"text-align":"center"}}>
          <h1>Add New Board</h1>
          <h1 style={{"font-size":"8em","margin":"0"}}>+</h1>
        </span>
      </Link>
    </div>
    {
      props.boards.map(board =>(
        <BoardCard board={board} />
      ))
    }
	</div>
);

export default BoardList;