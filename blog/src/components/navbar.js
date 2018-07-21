import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Popup from 'react-popup';
import {signupPopup} from './signup_popup';
import {Prompt} from './prompt';
import '../App.css';



export class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.getSignInPopup = this.getSignInPopup.bind(this);
    this.getSignUpPopup = this.getSignUpPopup.bind(this);
    this.state = {
      promptText:null,
      isSigninOpen:false,
      isOpen: false
    };
    Popup.registerPlugin('prompt', function (defaultValue, placeholder, callback) {

      let promptValue = {};
      let promptChange = function (value) {
          promptValue.username = value;
      };
      let promptChange1 = function (value) {
          promptValue.password = value;
      };
      const Getcontent = () => {
        return (
          <div>
          <Prompt onChange={promptChange} placeholder={"username or email"} value={""} type={"text"}/>
          <br/>
          <Prompt onChange={promptChange1} placeholder={"password"} value={""} type={"password"}/>
          <div class="error-text">{defaultValue==undefined?<br/>:defaultValue}</div>
          </div>
        )
      }
      this.create({
          title: 'Sign in',
          content: <Getcontent/> ,
          buttons: {

              left: [{
                  text: 'Login',
                  key: '⌘+s',

                  action: function () {

                      callback(promptValue);
                      Popup.close();
                  }
              },'cancel'
            ]
          }
      });
    });
    Popup.registerPlugin('prompt1', function (defaultValue, placeholder, callback) {
      let promptValue = {};
      let promptChange = function (value) {
          promptValue.email = value;
      };
      let promptChange1 = function (value) {
          promptValue.password = value;
      };
      let promptChange2 = function (value) {
          promptValue.username = value;
      };
      const Getcontent = () => {
        return (
          <div>
          <Prompt onChange={promptChange2} placeholder={"Username"} value={""} type={"text"}/>
          <br/>
          <Prompt onChange={promptChange} placeholder={"email"} value={""} type={"email"}/>
          <br/>
          <Prompt onChange={promptChange1} placeholder={"password"} value={""} type={"password"}/>
          <div class="error-text">{defaultValue==undefined?<br/>:defaultValue}</div>
          </div>
        )
      }
      this.create({
          title: 'Sign Up',
          content: <Getcontent/> ,
          buttons: {

              left: [{
                  text: 'Login',
                  key: '⌘+s',

                  action: function () {

                      callback(promptValue);
                      Popup.close();
                  }
              },'cancel'
            ]
          }
      });
    });
  }

  toggle() {
    console.log("toggle")
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  calllogin(quotes){
    var x=this;
    console.log("calling popup for login",this)
    Popup.plugins().prompt(quotes, 'Username', function (value) {
        if(value.username=="success")quotes=value.username;
        else {
          quotes="invalid username";
        }
        if(quotes =="success")return true;
        else
        x.calllogin("Invalid username");
    });

  }
  callSignup(quotes){
    var x=this;
    console.log("calling popup for Signup",this)
    Popup.plugins().prompt1(quotes, 'Username', function (value) {
        if(value.username=="success")quotes=value.username;
        else {
          quotes="invalid username";
        }
        if(quotes =="success")return true;
        else
        x.callSignup("Invalid username");
    });
  }
  getSignInPopup(){
    console.log("Sign in");
    this.calllogin();
  }
  getSignUpPopup(){
    console.log("Sign up")
    this.callSignup();
  }
  render() {
    return (
      <div>

        <Navbar color="transparent" light expand="md">
          <NavbarBrand >T-Z Blogs</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto  highlight" navbar>
              <NavItem>
                <NavLink  onClick={this.getSignInPopup}>Sign in</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.getSignUpPopup} className="sign-up">Sign up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}
