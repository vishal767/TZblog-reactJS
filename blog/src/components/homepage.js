import React, { Component } from 'react';
import {MainNav} from './navbar';
import {NavTabs} from './navtabs';
import {TrendCards} from './LeftCards';
import {MainStory} from './MainStory';
import {RightColumn} from './rightcolumn';
export class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <MainNav/>
        <NavTabs/>
        <div className="row">
        <TrendCards/>
        <MainStory/>
        <RightColumn/>
        </div>
      </div>
    );
  }
}
