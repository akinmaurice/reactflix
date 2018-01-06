import React from 'react';
import Genre from './tv/Genre';
import Breadcrumb from './tv/Breadcrumb';

const TvHome = (props) => {
  const { tv } = props;
  const imagePath = `http://image.tmdb.org/t/p/w185/${tv.poster_path}`;
  const styles = {
    backgroundImage: `url(${imagePath})`,
  };
  const seasonsCount = tv.seasons.length;
  const tvGenres = tv.genres;
  const genreList = Object.keys(tvGenres).map(genre => <Genre key={genre} genre={tvGenres[genre]} />);
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
              {tv.original_name}
            </h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <button className="btn btn-warning movieYear">
                2017
                </button>
              </li>
              <li className="list-inline-item">
                <button className="btn btn-grey">
                  <span className="badge badge-dark">{seasonsCount} </span> Seasons
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
      </div>
    </div>
  );
};

export default TvHome;
