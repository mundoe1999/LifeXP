import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './Style.css';
import LoginComponent from './pages/Login';

//Importing pages
import Project from './pages/Dashboard';
import store from './store';
import { Provider } from 'react-redux';


class App extends Component {

  render() {
    const DashboardComponent = () => (<Project />);
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' render={DashboardComponent} />
            <Route exact path='/Login' component={LoginComponent} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;