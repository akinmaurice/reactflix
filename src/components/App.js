import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MovieCard from './MovieCard';
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
        <div className="col-lg-12 text-center">
          <i className="fa fa-2x fa-circle-o-notch fa-spin" />
        </div>
      );
    } else if (!loading && !data.length) {
      views = (
        <div className="col-lg-12">
          <div className="text-center">
            <button className="btn jumboButton">
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
            <div className="col-lg-12">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                Movies
                </li>
              </ol>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12" />
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <input type="text" className="form-control searchInput" placeholder="Search Movies" />
            </div>
            <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12" />
          </div>
          <br />
          <div className="row text-center">
            <div className="col-lg-12">
              <h5 className="movieTitle">
                Trending Movies on {appTitle}
              </h5>
              <br />
            </div>
          </div>
          <div className="row">
            {views}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
