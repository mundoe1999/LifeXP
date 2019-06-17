import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';
import LoginComponent from './pages/Login';

//Importing pages
import Project from './pages/Dashboard';
import store from './store';


class App extends Component {

  render() {
    const DashboardComponent = () => (<Project />);
    return( 

        <Router>
          <Switch>
            <Route exact path='/' render={DashboardComponent}/>
            <Route exact path='/Login' component={LoginComponent}/>
          </Switch>
        </Router>

    )
  }
}

export default App;