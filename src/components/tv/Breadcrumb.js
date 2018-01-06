import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
  const { title } = props;
  return (
    <div className="container-fluid text-center">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/tv">Tv Shows</Link>
        </li>
        <li className="breadcrumb-item active">
          {title}
        </li>
      </ol>
    </div>
  );
};
export default Breadcrumb;
