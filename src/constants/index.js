import moment from 'moment';
import config from '../config';
// STATUS
export const SUCCESS = '_SUCCESS';
export const FAIL = '_FAIL';
export const START = '_START';
export const API_CALL = 'API_CALL';
export const API_URL = process.env.NODE_ENV !== 'production'
  ? 'https://engagement-staging-api.talent-tech.club'
  : 'https://api.talenttechlab.com';

// METHODS
export const methods = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
};

export const lsPreset = {
  weather: {
    timestamp: moment(),
    data: {},
  },
  // tasks: {
  //   timestamp: '',
  //   data: {},
  // },
  // sensor: {
  //   timestamp: '',
  //   data: {},
  // }
};

export const urls = {
  weather: config.urls.weather(config.city, config.keys.weather),
};

export const weatherApiUrl = config.urls.weather(config.city, config.keys.weather);
export const weatherIconsUrl = icon => `http://openweathermap.org/img/w/${icon}.png`;
