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
    const response = await axios.get('http://127.0.0.1:3000/tasks');
    this.setState({
      tasks: response.data
    });
  }


  render() {
    return (
      <div>
        {this.state.tasks.map((item, i) => {
          return <div key={i}>{item.summary} : {item.updated}</div>;
        })}
      </div>
    );
  }
}

export default Tasks;
