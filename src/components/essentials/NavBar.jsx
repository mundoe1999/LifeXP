import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
  <nav>
  <div className="flex-container">
    <Link to='/'><div className="logo"><b>exp</b></div></Link>
    <ul>
	  <li><Link to='/Logout'>Logout</Link></li>
      <li><Link to='/'>Dash</Link></li>
    </ul>
  </div>
</nav>
);

export default NavBar;

