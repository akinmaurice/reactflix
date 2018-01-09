import React from 'react';
import Genre from './tv/Genre';
import Trailer from './tv/Trailer';
import Breadcrumb from './tv/Breadcrumb';
import moment from '../moment';

const TvHome = (props) => {
  const { tv } = props;
  const imagePath = `http://image.tmdb.org/t/p/w185/${tv.poster_path}`;
  const tvAirYear = moment.moment(tv.first_air_date, 'YYYY-MM-DD').year();
  const styles = {
    backgroundImage: `url(${imagePath})`,
  };
  const seasonsCount = tv.seasons.length;
  const tvGenres = tv.genres;
  const genreList = Object.keys(tvGenres).map(genre => <Genre key={genre} genre={tvGenres[genre]} />);
  const tvVideos = tv.videos.results;
  const videoList = Object.keys(tvVideos).map(video => <Trailer key={video} trailer={tvVideos[video]} />);
  let statusView = <span />;
  if (tv.status === 'Ended') {
    statusView = <span className="badge badge-danger">{tv.status}</span>;
  } else {
    statusView = <span className="badge badge-primary">{tv.status}</span>;
  }
  return (
    <div>
      <div className="container-fluid">
        <Breadcrumb title={tv.original_name} />
      </div>
      <br />
      <div className="container">
        <div className="row text-left">
          <div className="col-lg-4">
            <div className="card" style={styles} />
          </div>
          <div className="col-lg-8">
            <h3 className="movieTitle">
              {tv.original_name} {statusView}
            </h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <button className="btn btn-warning movieYear">
                  {tvAirYear}
                </button>
              </li>
              <li className="list-inline-item">
                <button className="btn btn-grey">
                  <span className="badge badge-dark">{seasonsCount} </span> Season(s)
                </button>
              </li>
            </ul>
            <br />
            <p className="movieOverview">
              {tv.overview}
            </p>
            <li className="list-inline-item">
              {genreList}
            </li>
          </div>
        </div>
        <br />
        <div className="row text-center">
          <div className="col-lg-12">
            <hr />
            <h4 className="movieTitle">Trailers</h4>
            <hr />
          </div>
        </div>
        <div className="row text-center">
          {videoList}
        </div>
      </div>
    </div>
  );
};

export default TvHome;
