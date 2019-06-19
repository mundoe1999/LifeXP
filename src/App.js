import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';
import LoginComponent from './pages/Login';
import TestForm from './pages/TestForm';
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
            <Route exact path='/projtest' render={ProjectComponent}/>
            <Route exact path='/Login' component={LoginComponent}/>
          </Switch>
        </Router>
        </Provider>

    )
  }
}

export default App;