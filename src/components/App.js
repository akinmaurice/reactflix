import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MovieCard from './MovieCard';
import appTitle from '../helpers';

const apiKey = process.env.REACT_APP_API_KEY;
let navTitle = `Trending Movies on ${appTitle}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.getApiData = this.getApiData.bind(this);
    this.apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;
  }

  componentDidMount() {
    this.getApiData(this.apiUrl);
  }

  // On SUbmit Search Form
  onSubmit(event) {
    event.preventDefault();
    const searchQuery = this.q.value;
    if (searchQuery === '') {
      this.getApiData(this.apiUrl);
    } else {
      this.searchMovies(searchQuery);
    }
  }

  // Get Data From APi
  getApiData(dataSource) {
    axios.get(dataSource)
      .then((response) => {
        const requestData = response.data.results;
        const movieData = requestData.sort((a, b) => b.popularity - a.popularity);
        this.setState({ data: movieData, loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }

  // Function to fetch Movies with the Search Query
  searchMovies(query) {
    this.setState({ data: [], loading: true });
    navTitle = `Search Results for ${query}`;
    const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&include_adult=false`;
    this.getApiData(searchApi);
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
              <form onSubmit={this.onSubmit}>
                <input ref={(input) => { this.q = input; }} type="text" className="form-control searchInput" placeholder="Search Movies" />
              </form>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12" />
          </div>
          <br />
          <div className="row text-center">
            <div className="col-lg-12">
              <h5 className="movieTitle">
                {navTitle}
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
