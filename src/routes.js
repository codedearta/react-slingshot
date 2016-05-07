import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import FoosballGamePage from './containers/FoosballGamePage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FoosballGamePage} />
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
