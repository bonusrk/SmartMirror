import React, { Component } from 'react';
import moment from 'moment';
import config from '../config';
import Clocks from './Clocks';
import Weather from './Weather';
import { apiCall, LsHelper } from '../utils';
import { lsPreset, methods, urls } from '../constants';
import './app.less';


class App extends Component {
  constructor(props) {
    super(props);
    this.ls = false;
    this.state = {};
  }


  async componentDidMount() {
    this.ls = new LsHelper(window.localStorage, 'smirror');
    this.ls.init(lsPreset);
    await this.setState(
      this.ls.read()
    );
    this.initApp();
  }


  componentWillUnmount() {

  }

  /**
   * Initialize application intervals, timestamps, etc.
   */
  initApp = async () => {
    const state = this.state;
    for (let key in state) {
      if (this.checkInterval(key)) {
        try {
          const response = await apiCall(methods.get, urls[key], {});
          console.log('RESPONSE ===> ', response);
          this.onUpdate(key, response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  /**
   * Check if it is enough time passed to make new apiCall
   * @param key {string} key to check
   * @returns {boolean}
   */
  checkInterval = (key) => {
    console.log('CHECK INTERVAL', moment().valueOf() - moment(this.state[key].timestamp).valueOf(),
      '====', config.intervals[key]);
    return moment().valueOf() - moment(this.state[key].timestamp).valueOf() > config.intervals[key];
  };


  /**
   *
   * @param key {string} key to update in state
   * @param data {any} data to place to the key
   */
  onUpdate = async (key, data) => {
    console.log('UPDATE!!!');
    await this.setState({
      [key]: {
        data: data,
        timestamp: moment()
      }
    });
    console.log('STATE AFTER UPDATE====>', this.state);
    this.ls.write(this.state);
    console.log('LocalStorage AFTER UPDATE====>', this.ls.read());
  };

  render() {
    return (
      <div className='content'>
        <h1>Hello, User!!!</h1>
        <Clocks />
        <Weather weather={this.state.weather || {}} />
      </div>
    );
  }
}

export default App;
