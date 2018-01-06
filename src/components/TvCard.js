import React from 'react';
import { Link } from 'react-router-dom';

const TvCard = (props) => {
  const { details } = props;
  const imagePath = `http://image.tmdb.org/t/p/w185/${details.poster_path}`;
  const tvLink = `/tv/${details.id}`;
  const styles = {
    backgroundImage: `url(${imagePath})`,
  };
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
      <Link to={tvLink}>
        <div className="card" style={styles} />
      </Link>
    </div>
  );
};


export default TvCard;
