import React, { PureComponent } from 'react';
import moment from 'moment';

class Clocks extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    };
  }

  static propTypes = {};
  static defaultProps = {};


  componentDidMount() {
    this.interval = setInterval(this.timer, 1000);
  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  /**
   * updates timer
   */
  timer = () => {
    this.setState({
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    });
  };

  render() {
    return (
      <div className='clock'>
        {this.state.time}
      </div>
    );
  }
}

export default Clocks;
