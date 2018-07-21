import React ,{Component} from 'react';
import Popup from "react-popup";
import '../App.css';
export class signupPopup extends React.Component {
  render() {
    return (
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
    );
  }
}
