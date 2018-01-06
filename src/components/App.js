import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import loadingSvg from '../helpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      message: '',
      status: false,
    };
    this.apiUrl = 'http://localhost:3001/data';
  }

  componentDidMount() {
  }
  render() {
    // <img src={loadingSvg} alt="Loading..." className="loadingSvg" />
    return (
      <div>
        <Header />
        <br />
        <div className="container text-center">
          <div className="row text-center">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <input type="text" className="form-control searchInput" placeholder="Search Movies or Tv Shows" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
          </div>
          <br />
          <div className="row text-center">
            <div className="col-lg-12">
              <h5>
                Popular on ReactFlix
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
