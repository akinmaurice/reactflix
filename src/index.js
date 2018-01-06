import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WebFont from 'webfontloader';


import App from './components/App';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

import registerServiceWorker from './registerServiceWorker';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/style.css';

/*
 fonts Import here
*/

WebFont.load({
  google: {
    families: ['Karla', 'Lato', 'Open Sans', 'Roboto', 'sans-serif'],
  },
});


/*
STateless Router Components Setup
*/

const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/movie/:movieId" exact component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
render(<Root />, document.querySelector('#root'));
registerServiceWorker();
