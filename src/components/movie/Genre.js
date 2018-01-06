import React from 'react';

const Genre = (props) => {
  const { genre } = props;
  return (
    <button className="btn btn-app">
      {genre.name}
    </button>
  );
};
export default Genre;
