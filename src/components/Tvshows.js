import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import TvCard from './TvCard';
import loadingSvg from '../loadSvg';
import appTitle from '../helpers';

class Tvshows extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
    this.apiUrl = 'https://api.themoviedb.org/3/discover/tv?api_key=b6ee2fdea63e38fc13788ccec1b2b7d8&language=en-US';
  }

  componentDidMount() {
    axios.get(this.apiUrl)
      .then((response) => {
        const tvData = response.data.results;
        this.setState({ data: tvData, loading: false });
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
      views = Object.keys(data).map(tv => <TvCard key={tv} details={data[tv]} />);
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
            <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12" />
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <input type="text" className="form-control searchInput" placeholder="Search Tv Shows" />
            </div>
            <div className="col-lg-4 col-md-3 col-sm-3 col-xs-12" />
          </div>
          <br />
          <div className="row text-center">
            <div className="col-lg-12">
              <h5 className="movieTitle">
                Popular Tv Shows
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
