import React from 'react';
import Genre from './movie/Genre';
import Trailer from './movie/Trailer';
import Breadcrumb from './movie/Breadcrumb';

const MovieHome = (props) => {
  const { movie } = props;
  const imagePath = `http://image.tmdb.org/t/p/w185/${movie.poster_path}`;
  const styles = {
    backgroundImage: `url(${imagePath})`,
  };
  const movieGenres = movie.genres;
  const genreList = Object.keys(movieGenres).map(genre => <Genre key={genre} genre={movieGenres[genre]} />);
  const movieVideos = movie.videos.results;
  const videoList = Object.keys(movieVideos).map(video => <Trailer key={video} genre={movieVideos[video]} />);
  console.log(movieVideos);
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
              {movie.original_title}
            </h3>
            <li className="list-inline-item">
              <button className="btn btn-warning movieYear">
            2017
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
          {videoList}
        </div>
      </div>
    </div>
  );
};

export default MovieHome;
