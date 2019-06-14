import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';


//Importing pages
import Project from './pages/Project';

class App extends Component {

  render() {
    const ProjectComponent = () => (<Project />);
    return( 

        <Router>
          <Switch>
            <Route exact path='/' render={ProjectComponent}/>
          </Switch>
        </Router>

    )
  }
}

export default App;