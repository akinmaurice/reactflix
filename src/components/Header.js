import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-inverse fixed-top">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">React Movie Viewer </Link>
    </div>
  </nav>
);
export default Header;
