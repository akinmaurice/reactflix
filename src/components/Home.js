import React from 'react';
import Jumbotron from './Jumbotron';
import Header from './Header';
import Footer from './Footer';
import appTitle from '../helpers';

const Home = props => (
  <div>
    <Header appTitle={appTitle} />
    <Jumbotron />
    <Footer />
  </div>
);
export default Home;
