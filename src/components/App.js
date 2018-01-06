import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Movie from './Movie';
import loadingSvg from '../helpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: 'blah Blah' },
        { name: 'jdjdjdjd' },
        { name: 'jfjfjfjfj' },
      ],
      loading: false,
    };
    this.apiUrl = 'http://localhost:3001/data';
  }

  componentDidMount() {
  }
  render() {
    const { data } = this.state;
    const { loading } = this.state;
    let views = <div />;
    if (loading === false && data.length >= 1) {
      console.log(data.length);
      views = Object.keys(data).map(movie => <Movie key={movie} details={data[movie]} />);
    }
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
          {views}
        </div>
      </div>
    );
  }
}

export default App;
