import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';


//Importing pages
import Project from './pages/Dashboard';

class App extends Component {

  render() {
    const DashboardComponent = () => (<Project />);
    return( 

        <Router>
          <Switch>
            <Route exact path='/' render={DashboardComponent}/>
          </Switch>
        </Router>

    )
  }
}

export default App;