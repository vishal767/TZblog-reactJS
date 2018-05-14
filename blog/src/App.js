import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import {Homepage} from './components/homepage';
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Homepage} />
      </Router>
    );
  }
}

export default App;
