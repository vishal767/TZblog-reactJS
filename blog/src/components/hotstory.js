import React, { Component } from 'react';

import '../App.css';
import HotStoryImage from '../images/download.png';
export class HotStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading:this.props.name
    }
  }
  render() {
    const liItems=(
      <li>
          <img src={HotStoryImage} />
          <div className="hotstory-text">
            <div className="hotstory-text-heading">
              First Story hotstory-text-heading
            </div>

            <div className="hotstory-text-readmore">
              Read More
            </div>
          </div>
      </li>
    )
    return (
      <div className="hotstory">
        <div className="hotstory-heading">
          {this.state.heading}
          <hr/>
        </div>
        <div>
          <ul className="hotstory-ul" type="none">
            {liItems}
            {liItems}
            {liItems}
            {liItems}
            {liItems}
            {liItems}
          </ul>
        </div>
      </div>
    );
  }
}
