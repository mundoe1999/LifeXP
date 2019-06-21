import React from 'react';
import {Link} from 'react-router-dom';
import {connect}  from 'react-redux';
import {signOutAction} from '../../actions/authentication';

class NavBar extends React.Component{
	render(){
if(this.props.name != undefined){
		return(
  <nav>
  <div className="flex-container">
  	<div className="nametext">Welcome, {this.props.name}!</div>
      <Link to='/'><div className="logo"><b>exp</b></div></Link>
      <ul>
        <li><Link onClick={this.props.signOutAction}>Logout</Link></li>
        <li><Link to={`/dashboard/${this.props.daLink}`}>Dash</Link></li>
      </ul>
  </div>
</nav>
)
}
else{
return(
  <nav>
  <div className="flex-container">
      <Link to='/'><div className="logo"><b>exp</b></div></Link>
      <ul>
        <li><Link to='/Logout'>Logout</Link></li>
        <li><Link to={`/user/${this.props.daLink}`}>Dash</Link></li>
      </ul>
  </div>
</nav>
)
}
}
}

export default connect(null,{signOutAction})(NavBar);

