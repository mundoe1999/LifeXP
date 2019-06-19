import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';
import LoginComponent from './pages/Login';
<<<<<<< HEAD
import addBoardComponent from './pages/AddBoard';
=======
import TestForm from './pages/TestForm';
>>>>>>> 824801be70d2c77b9a8d9f21f1989b394726c6de
import { Provider } from 'react-redux';

//Importing pages
import Dash from './pages/Dashboard';
import Project from './pages/Project';

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
            <Route exact path='/Board' render={ProjectComponent}/>
            <Route exact path='/Login' component={LoginComponent}/>
            <Route exact path='/addBoard' component={addBoardComponent}/>
          </Switch>
        </Router>
        </Provider>

    )
  }
}

export default App;