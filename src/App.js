import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './views/About/About';
import Project from './views/Project/Project';
import Home from './views/Home/Home';
import CSSModules from 'react-css-modules';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/projects/:id" component={Project} />
        <Route path="/About" component={About} />
        <Route component={Home} />
      </Switch>
    );
  }
}

export default CSSModules(App)