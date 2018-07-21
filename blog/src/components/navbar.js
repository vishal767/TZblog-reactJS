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
import '../App.css';

class Prompt extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };

        this.onChange = (e) => this._onChange(e);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            this.props.onChange(this.state.value);
        }
    }

    _onChange(e) {
        let value = e.target.value;

        this.setState({value: value});
    }

    render() {
        return <input type={this.props.type} placeholder={this.props.placeholder} className="mm-popup__input" value={this.state.value} onChange={this.onChange} />;
    }
}

export class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.getpopup = this.getpopup.bind(this);
    this.closepopup = this.closepopup.bind(this);
    this.state = {
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
  }

  toggle() {
    console.log("toggle")
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  getpopup(){
    console.log("ad");
    Popup.plugins().prompt('', 'Username', function (value) {
        console.log(value);
    });


  }
  closepopup(){
    console.log("click1")

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
                <NavLink  onClick={this.getpopup}>Sign in</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="sign-up">Sign up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}
