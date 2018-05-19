//STATUS
export const SUCCESS = '_SUCCESS';
export const FAIL = '_FAIL';
export const START = '_START';
export const API_CALL = 'API_CALL';
export const API_URL = process.env.NODE_ENV !== 'production'
  ? 'https://engagement-staging-api.talent-tech.club'
  : 'https://api.talenttechlab.com';

//METHODS
export const methods = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE'
};


export const key = '7cb8efed312568cf54a9b2c5b42d1e75';
