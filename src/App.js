import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';
import LoginComponent from './pages/Login';

//Importing pages
import Project from './pages/Project';



class App extends Component {

  render() {
    const ProjectComponent = () => (<Project />);
    return( 

        <Router>
          <Switch>
            <Route exact path='/' render={ProjectComponent}/>
            <Route exact path='/Login' component={LoginComponent}/>
          </Switch>
        </Router>

    )
  }
}

export default App;