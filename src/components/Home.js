import React from 'react';
import Jumbotron from './Jumbotron';
import Header from './Header';
import appTitle from '../helpers';

const Home = props => (
  <div>
    <Header appTitle={appTitle} />
    <Jumbotron />
  </div>
);
export default Home;
