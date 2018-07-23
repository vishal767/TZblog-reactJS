import React, { Component } from 'react';

import '../App.css';

export class HotStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading:"Hot Story"
    }
  }
  render() {
    return (
      <div className="hotstory">
        <div className="hotstory-heading">
          {this.state.heading}
          <hr/>
        </div>
        <div>
          <ul className="hotstory-ul" type="none">
            <li> <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" width="25px" height="25px"/> First Story</li>
            <li> <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" width="25px" height="25px"/> second Story</li>
          </ul>
        </div>
      </div>
    );
  }
}
