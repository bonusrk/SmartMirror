import React, { PureComponent } from 'react';
import moment from 'moment';

moment.locale('ru');

class Clocks extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('MMMM D YYYY, h:mm:ss')
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
      time: moment().format('MMMM D YYYY, h:mm:ss')
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
