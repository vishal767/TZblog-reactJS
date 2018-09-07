import React, { Component } from 'react';
import {HotStory} from './hotstory';
import '../App.css';

export class RightColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="col-md-3 ">
        <HotStory name={"Hot Story"}/>
        <HotStory name={"Favorites"}/>
      </div>
    );
  }
}
