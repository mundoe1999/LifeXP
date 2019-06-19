import React from 'react';
import LoginForm from '../components/essentials/LoginForm';
import {Link} from 'react-router-dom';


const LoginComponent = () => (
  <div  id="loginPage">
    <h1>Sign in to LifeXP</h1>
    <LoginForm />
    <div>
      New? <Link to='/signup'>Click Here to Sign up!</Link>
    </div>
  </div>
);


export default LoginComponent;