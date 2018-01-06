import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WebFont from 'webfontloader';

import Home from './components/Home';
import App from './components/App';
import Tvshows from './components/Tvshows';
import Movie from './components/Movie';
import Tv from './components/Tv';
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
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={App} />
        <Route path="/tv" exact component={Tvshows} />
        <Route path="/movie/:movieId" exact component={Movie} />
        <Route path="/tv/:tvId" exact component={Tv} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
render(<Root />, document.querySelector('#root'));
registerServiceWorker();
