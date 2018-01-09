import React from 'react';
import Genre from './movie/Genre';
import Trailer from './movie/Trailer';
import Breadcrumb from './movie/Breadcrumb';
import moment from '../moment';

const MovieHome = (props) => {
  const { movie } = props;
  const movieReleaseYear = moment.moment(movie.release_date, 'YYYY-MM-DD').year();
  const imagePath = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  const styles = {
    backgroundImage: `url(${imagePath})`,
  };
  const movieGenres = movie.genres;
  const genreList = Object.keys(movieGenres).map(genre => <Genre key={genre} genre={movieGenres[genre]} />);
  const movieVideos = movie.videos.results;
  const videoList = Object.keys(movieVideos).map(video => <Trailer key={video} trailer={movieVideos[video]} />);
  let statusView = <span />;
  if (movie.status === 'Released') {
    statusView = <span className="badge badge-primary">{movie.status}</span>;
  } else {
    statusView = <span className="badge badge-danger">{movie.status}</span>;
  }
  return (
    <div>
      <div className="container-fluid">
        <Breadcrumb title={movie.original_title} />
      </div>
      <br />
      <div className="container">
        <div className="row text-left">
          <div className="col-lg-4">
            <div className="card" style={styles} />
          </div>
          <div className="col-lg-8">
            <h3 className="movieTitle">
              {movie.original_title} {statusView}
            </h3>
            <li className="list-inline-item">
              <button className="btn btn-warning movieYear">
                {movieReleaseYear}
              </button>
            </li>
            <br /> <br />
            <p className="movieOverview">
              {movie.overview}
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

export default MovieHome;
