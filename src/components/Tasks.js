import React, { Component } from 'react';
import axios from 'axios';

class Tasks extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://127.0.0.1:3000/tasks');
      this.setState({
        tasks: response.data
      });
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const { tasks } = this.state;
    return (
      <div>
        {tasks.map((item, i) => (
          <div key={i}>
            {item.summary}
            {' '}
            {' '}
            :
            {' '}
            {item.updated}
          </div>
        ))}
      </div>
    );
  }
}

export default Tasks;
