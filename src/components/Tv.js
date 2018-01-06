import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import loadingSvg from '../helpers';
import appTitle from '../helpers';
import TvHome from './TvHome';

const apiKey = 'b6ee2fdea63e38fc13788ccec1b2b7d8';

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
    const apiUrl = `http://api.themoviedb.org/3/tv/${tvID}?api_key=${apiKey}&language=en-US`;
    axios.get(apiUrl)
      .then((response) => {
        const tv = response.data;
        this.setState({ data: tv, status: true, loading: false });
        console.log(tv);
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
          <div className="col-lg-12">
            <img src={loadingSvg} alt="Loading..." className="loadingSvg" />
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