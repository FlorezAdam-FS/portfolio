import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

// this holds all the routes for the page
class Routes extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </section>
    );
  }
}
export default Routes;
