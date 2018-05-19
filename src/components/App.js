import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clocks from './Clocks';
import './app.less';
import { LsHelper } from '../utils';


class App extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.ls = new LsHelper(window.localStorage);
  }


  render() {
    return (
      <div className='content'>
        <h1>Hello, Kireenkov!!!</h1>
        <Clocks />
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => {
  return {};
}, {})(App);
