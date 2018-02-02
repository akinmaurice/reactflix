import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TvCard from './TvCard';
import appTitle from '../helpers';

const apiKey = process.env.REACT_APP_API_KEY;
let navTitle = 'Airing Today';

class Tvshows extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.searchTv = this.searchTv.bind(this);
    this.getApiData = this.getApiData.bind(this);
    this.apiUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&timezone=Africa/Lagos`;
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
      this.searchTv(searchQuery);
    }
  }

  // Get Data API Function
  getApiData(dataSource) {
    axios.get(dataSource)
      .then((response) => {
        const requestData = response.data.results;
        const tvData = requestData.sort((a, b) => b.popularity - a.popularity);
        this.setState({ data: tvData, loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }

  // Function to fetch Tv Shows with the Search Query
  searchTv(query) {
    this.setState({ data: [], loading: true });
    navTitle = `Search Results for ${query}`;
    const searchApi = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${query}`;
    this.getApiData(searchApi);
  }

  // Render FUnction
  render() {
    const { data } = this.state;
    const { loading } = this.state;
    let views = <div />;
    if (!loading && data.length >= 1) {
      views = Object.keys(data).map(tv => <TvCard key={tv} details={data[tv]} />);
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
              Could not get Tv Shows
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
                Tv Shows
                </li>
              </ol>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12" />
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <form onSubmit={this.onSubmit}>
                <input ref={(input) => { this.q = input; }} type="text" className="form-control searchInput" placeholder="Search Tv Shows" />
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

export default Tvshows;
