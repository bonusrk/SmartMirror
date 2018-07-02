import React, { PureComponent } from 'react';
import moment from 'moment';

moment.locale('ru');

class Clocks extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('MMMM D YYYY, h:mm:ss')
    };
  }

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
    const { time } = this.state;
    return (
      <div className="clock">
        {time}
      </div>
    );
  }
}

export default Clocks;
