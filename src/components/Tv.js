import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import appTitle from '../helpers';
import TvHome from './TvHome';

const apiKey = process.env.REACT_APP_API_KEY;

class Tv extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
      status: false,
    };
  }

  componentDidMount() {
    const tvID = this.props.match.params.tvId;
    const apiUrl = `http://api.themoviedb.org/3/tv/${tvID}?api_key=${apiKey}&language=en-US&append_to_response=videos`;
    axios.get(apiUrl)
      .then((response) => {
        const tv = response.data;
        this.setState({ data: tv, status: true, loading: false });
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
      views = <TvHome tv={data} />;
    } else if (loading && !status) {
      views = (
        <div className="row">
          <div className="col-lg-12 text-center">
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
              Could not find that Show!
            </button>
            <br />
            <br />
            <Link className="btn btn-warning movieYear" to="/tv">
              View More Shows
            </Link>
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

export default Tv;
