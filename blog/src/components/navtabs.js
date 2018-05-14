import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export  class NavTabs extends React.Component {
  render() {
    return (
      <div align="center">
        <Nav className="tablist">
          <NavLink href="#">Mobiles</NavLink> <NavLink href="#">PCs</NavLink> <NavLink href="#">Latest</NavLink> <NavLink href="#">Wierd</NavLink> <NavLink href="#">Gaming</NavLink> <NavLink href="#">Consoles</NavLink> 
        </Nav>
      </div>
    );
  }
}
