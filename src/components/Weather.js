import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { weatherIconsUrl } from '../constants';

class Weather extends Component {
  static propTypes = {
    weatherData: PropTypes.object,
  };

  static defaultProps = {};

  render() {
    const { weatherData } = this.props;
    if (!weatherData) return false;
    const { weather, main } = weatherData.data;
    return (
      <div className="weather">
        <img alt="weather" src={weatherIconsUrl(weather[0].icon)} />
        <ul>
          <li>
            Температура:
            {Math.round(main.temp)}
            {' '}
            &#8451;
          </li>
          <li>
            Давление:
            {main.pressure}
          </li>
          <li>
            Влажность:
            {main.humidity}
            {' '}
            %
          </li>
        </ul>
      </div>
    );
  }
}

export default Weather;
