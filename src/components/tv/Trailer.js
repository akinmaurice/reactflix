import React from 'react';

const Trailer = (props) => {
  const { trailer } = props;
  const videoLink = `https://www.youtube.com/embed/${trailer.key}?rel=0`;
  return (
    <div className="col-lg-4">
      <div className="embed-responsive embed-responsive-16by9 trailer">
        <iframe title="trailer" className="embed-responsive-item" src={videoLink} allowFullScreen />
      </div>
    </div>
  );
};
export default Trailer;
