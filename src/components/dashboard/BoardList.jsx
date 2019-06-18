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

import React, {Component} from 'react';
import { connect } from 'react-redux';
import BoardCard from './BoardCard';

class BoardList extends Component{
	render(){
		return(
     	   	<div>
        	
        	</div>
      	)
	}
}