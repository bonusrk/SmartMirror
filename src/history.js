import { browserHistory, hashHistory } from 'react-router';

export const history = process.env.NODE_ENV === 'locale' ? hashHistory : browserHistory;
