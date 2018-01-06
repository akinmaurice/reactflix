import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { appTitle } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-inverse fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand py-0">{appTitle} </Link>
      </div>
    </nav>
  );
};
export default Header;
