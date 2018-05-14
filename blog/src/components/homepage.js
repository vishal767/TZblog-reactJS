import React, { Component } from 'react';
import {MainNav} from './navbar';
import {NavTabs} from './navtabs';
import {TrendCards} from './LeftCards'
export class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <MainNav/>
        <NavTabs/>
        <TrendCards/>
      </div>
    );
  }
}
