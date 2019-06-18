import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';


//Importing pages
import Dash from './pages/Dashboard';
import Project from './pages/Project';

class App extends Component {

  render() {
    const DashboardComponent = () => (<Dash />);
    const ProjectComponent = () => (<Project />);
    return( 

        <Router>
          <Switch>
            <Route exact path='/' render={DashboardComponent}/>
            <Route exact path='/projtest' render={ProjectComponent}/>
          </Switch>
        </Router>

    )
  }
}

export default App;