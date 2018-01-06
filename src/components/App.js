import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import MovieCard from './MovieCard';
import loadingSvg from '../helpers';
import appTitle from '../helpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
    this.apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b6ee2fdea63e38fc13788ccec1b2b7d8&language=en-US';
  }

  componentDidMount() {
    axios.get(this.apiUrl)
      .then((response) => {
        const movieData = response.data.results;
        this.setState({ data: movieData, loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }
  render() {
    const { data } = this.state;
    const { loading } = this.state;
    let views = <div />;
    if (!loading && data.length >= 1) {
      views = Object.keys(data).map(movie => <MovieCard key={movie} details={data[movie]} />);
    } else if (loading && !data.length) {
      views = (
        <div className="col-lg-12">
          <img src={loadingSvg} alt="Loading..." className="loadingSvg" />
        </div>
      );
    } else if (!loading && !data.length) {
      views = (
        <div className="col-lg-12">
          <div className="text-center">
            <button className="btn btn-danger">
              No Movies to Show
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Header appTitle={appTitle} />
        <br />
        <div className="container-fluid text-center">
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
                Popular on {appTitle}
              </h5>
              <br />
            </div>
          </div>
          <div className="row">
            {views}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
