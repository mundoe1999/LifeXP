import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';
import LoginComponent from './pages/Login';
import addBoardComponent from './pages/AddBoard';
import { Provider } from 'react-redux';
import LandingPage from './pages/LandingPage';


//Importing pages
import Dash from './pages/Dashboard';
import Project from './pages/Project';
import SignupComponent from './pages/Signup';
import createTask from './components/essentials/CreateTaskForm';
import store from './store';


class App extends Component {

  render() {
    const DashboardComponent = () => (<Dash />);
    const ProjectComponent = () => (<Project />);
    return (
      <Provider store={store}>
        <Router>
          <Switch>
          <Route exact path='/' render={LandingPageComponent}/>
            <Route path='/user/:userId' component={DashboardComponent} />
            <Route path='/createtask/:boardId' component={createTask} />
            <Route path='/board/:boardId' component={ProjectComponent} />
            <Route exact path='/Login' component={LoginComponent} />
            <Route exact path='/CreateBoard' component={addBoardComponent} />
            <Route exact path='/Signup' component={SignupComponent} />
            
          </Switch>
        </Router>
      </Provider>

    )
  }
}

export default App;