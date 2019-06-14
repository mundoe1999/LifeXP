import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
  <nav>
  <div className="flex-container">
    <Link to='/'><div className="logo">Life<strong>XP</strong></div></Link>
    <ul>
	  <li><Link to='/Logout'>Logout</Link></li>
      <li><Link to='/Dashboard'>Dash</Link></li>
      <li><Link to='/Login'> Login</Link></li>
    </ul>
  </div>
</nav>
);

export default NavBar;

