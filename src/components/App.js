import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const {location} = this.props;
    return (
        <div className='content'>
          <h1>Hello, Kireenkov!!!</h1>
          {this.props.children}
        </div>
    );
  }
}

export default connect(state => {
  return {};
}, {})(App);
