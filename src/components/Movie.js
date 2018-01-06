import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import loadingSvg from '../helpers';
import appTitle from '../helpers';

const apiKey = 'b6ee2fdea63e38fc13788ccec1b2b7d8';

class App extends Component {
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
    const apiUrl = `http://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`;
    axios.get(apiUrl)
      .then((response) => {
        const movie = response.data;
        this.setState({ data: movie, status: true, loading: false });
        console.log(this.state.data);
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
      views = <p>Movie!</p>;
    } else if (loading && !status) {
      views = <img src={loadingSvg} alt="Loading..." className="loadingSvg" />;
    } else if (!loading && !status) {
      views = (
        <div className="col-lg-12">
          <div className="text-center">
            <button className="btn btn-danger">
              Could not find that Movie!
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Header appTitle={appTitle} />
        <div className="container-fluid text-center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">
              Movie TItle
            </li>
          </ol>
        </div>
        <div className="container text-center">
          <div className="row">
            {views}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
