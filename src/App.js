import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';
import LoginComponent from './pages/Login';
import addBoardComponent from './pages/AddBoard';
import { Provider } from 'react-redux';

//Importing pages
import Dash from './pages/Dashboard';
import Project from './pages/Project';
import SignupComponent from './pages/Signup';
import store from './store';


class App extends Component {

  render() {
    const DashboardComponent = () => (<Dash />);
    const ProjectComponent = () => (<Project />);
    return( 
      <Provider store={store}>
        <Router>
          <Switch>
          <Route exact path='/' render={DashboardComponent}/>
            <Route path ='/board/:boardId' component={ProjectComponent}/>
            <Route exact path='/Login' component={LoginComponent}/>
            <Route exact path='/CreateBoard' component={addBoardComponent}/>
            <Route exact path='/Signup' component={SignupComponent}/>
          </Switch>
        </Router>
        </Provider>

    )
  }
}

export default App;