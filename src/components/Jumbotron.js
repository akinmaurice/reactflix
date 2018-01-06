import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = props => (
  <section className="jumbotron text-center">
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <Link to="/movies" className="btn btn-block btn-lg jumboButton">
          Movies
          </Link>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <Link to="/tv" className="btn btn-block btn-lg jumboButton">
          Tv Shows
          </Link>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
      </div>
    </div>
  </section>
);


export default Jumbotron;
