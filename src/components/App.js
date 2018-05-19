import React, { Component } from 'react';
import Clocks from './Clocks';
import { LsHelper } from '../utils';
import { lsPreset } from '../constants';
import './app.less';


class App extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.ls = new LsHelper(window.localStorage, 'smirror');
    if (!this.ls.prop('smirror')) {
      this.ls.setupStorage('smirror', lsPreset);
    }
    console.log(JSON.parse(this.ls.prop('smirror')));
  }


  render() {
    return (
      <div className='content'>
        <h1>Hello, User!!!</h1>
        <Clocks />
      </div>
    );
  }
}

export default App;
