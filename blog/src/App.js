import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import {Homepage} from './components/homepage';
import {ProfileHome} from './profilecomponents/profilehome';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/profile" component={ProfileHome} />
        </Switch>
      </Router>
    );
  }
}

export default App;
