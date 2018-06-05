import React, { Component } from 'react';
import { weatherIconsUrl } from '../constants';

class Weather extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    const { data } = this.props.weather;
    if (!data) return false;
    const { weather, main } = data;
    return (
      <div className='weather'>
        <img src={weatherIconsUrl(weather[0].icon)} />
        <ul>
          <li>Температура: {main.temp}</li>
          <li>Давление: {main.pressure}</li>
          <li>Влажность: {main.humidity} %</li>
        </ul>
      </div>
    );
  }
}

export default Weather;
