import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const { details } = props;
  const imagePath = `http://image.tmdb.org/t/p/w185/${details.poster_path}`;
  const movieLink = `/movie/${details.id}`;
  const styles = {
    backgroundImage: `url(${imagePath})`,
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <Link to={movieLink}>
        <div className="card" style={styles} />
      </Link>
    </div>
  );
};


export default Movie;
