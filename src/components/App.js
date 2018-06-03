import React, { Component } from 'react';
import moment from 'moment';
import Clocks from './Clocks';
import { LsHelper } from '../utils';
import { lsPreset } from '../constants';
import './app.less';


class App extends Component {
  constructor(props) {
    super(props);
    this.ls = false;
    this.state = {
      app: {}
    };
  }


  async componentDidMount() {
    this.ls = new LsHelper(window.localStorage, 'smirror');
    this.ls.init(lsPreset);
    await this.setState({
      app: this.ls.read()
    });
    this.initApp();
  }

  /**
   * Initialize application intervals, timestamps etc.
   */
  initApp = () => {

  };

  /**
   *
   * @param key
   * @param data
   */
  onUpdate = async (key, data) => {
    await this.setState({
      [key]: {
        data: data,
        timestamp: moment()
      }
    });
    this.ls.write(this.state.app);
  };

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
