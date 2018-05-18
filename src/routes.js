import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import { history } from './history';

import { App, } from './components';


export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
);
