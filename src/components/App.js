import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Jumbotron from './Jumbotron';
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
    return (
      <div>
        <Header />
        <Jumbotron />
        <br />
        <div className="container text-center">
          <div className="row text-center">
            <div className="col-lg-12 text-danger">
              <h4 />
              <hr />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <img src={loadingSvg} alt="Loading..." className="loadingSvg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
