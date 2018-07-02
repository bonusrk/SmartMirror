import React from 'react';
import { Route, Router } from 'react-router';
import { history } from './history';

import { App } from './components';


export default (
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
);
