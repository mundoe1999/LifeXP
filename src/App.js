import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';
import LoginComponent from './pages/Login';
import addBoardComponent from './pages/AddBoard';
import { Provider } from 'react-redux';

//Importing pages
import Dash from './pages/Dashboard';
import Project from './pages/Project';
import LandingPage from './pages/LandingPage';

import SignupComponent from './pages/Signup';


import createTask from './components/essentials/CreateTaskForm';
import store from './store';

//Auth stuff
import requireAuth from './hoc/require_auth';
import noRequireAuth from './hoc/no_require_auth';

import{AUTHENTICATED} from './actions/types';
const user = localStorage.getItem('user');
if(user){
  store.dispatch({type:AUTHENTICATED});
  console.log(user);
}


class App extends Component {

  render() {
    const DashboardComponent = () => (<Dash />);
    const ProjectComponent = () => (<Project />);

    const LandingPageComponent = () => (<LandingPage/>)
    return( 
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'               render={LandingPageComponent}/>
            <Route path='/dashboard/:userId'    component={requireAuth(DashboardComponent)} />
            <Route path='/createtask/:boardId'  component={requireAuth(createTask)} />
            <Route path='/board/:boardId'       component={requireAuth(ProjectComponent)} />
            <Route exact path='/CreateBoard'    component={requireAuth(addBoardComponent)} />
            <Route exact path='/Signup'         component={noRequireAuth(SignupComponent)} />
            <Route exact path='/Login'          component={noRequireAuth(LoginComponent)} />
          </Switch>
        </Router>
      </Provider>

    )
  }
}

export default App;