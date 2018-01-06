import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import appTitle from '../helpers';
import MovieHome from './MovieHome';

const apiKey = 'b6ee2fdea63e38fc13788ccec1b2b7d8';

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
      status: false,
    };
  }

  componentDidMount() {
    const movieID = this.props.match.params.movieId;
    const apiUrl = `http://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=videos`;
    axios.get(apiUrl)
      .then((response) => {
        const movie = response.data;
        this.setState({ data: movie, status: true, loading: false });
      })
      .catch((error) => {
        this.setState({ status: false, loading: false });
      });
  }
  render() {
    const { data } = this.state;
    const { loading } = this.state;
    const { status } = this.state;
    let views = <div />;
    if (!loading && status) {
      views = <MovieHome movie={data} />;
    } else if (loading && !status) {
      views = (
        <div className="row">
          <div className="col-lg-12">
            <i className="fa fa-2x fa-circle-o-notch fa-spin" />
          </div>
        </div>
      );
    } else if (!loading && !status) {
      views = (
        <div className="col-lg-12">
          <div className="text-center">
            <br />
            <button className="btn jumboButton">
              Could not find that Movie!
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Header appTitle={appTitle} />
        {views}
        <Footer />
      </div>
    );
  }
}

export default Movie;
