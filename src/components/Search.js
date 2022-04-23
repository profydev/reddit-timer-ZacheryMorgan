import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Search = () => {
  const params = useParams();

  return (
    <div>{params.path}</div>
  );
};

export default Search;
