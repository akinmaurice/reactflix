import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFound = props => (
  <div>
    <Header />
    <div className="container text-center">
      <br />
      <br />
      <h1>404</h1>
      <h5> Not Found</h5>
      <Link to="/">Go Back Home</Link>
    </div>
  </div>
);

export default NotFound;
