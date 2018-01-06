import React from 'react';

const Jumbotron = props => (
  <section className="jumbotron text-center">
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <input type="text" className="form-control searchInput" placeholder="Search Movies or Tv Shows" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
      </div>
    </div>
  </section>
);


export default Jumbotron;
