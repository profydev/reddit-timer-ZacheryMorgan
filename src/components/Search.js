import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Search = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>{params.path}</div>
  );
};

export default Search;

// Search.propTypes = {
//   match: PropTypes.string.isRequired,
// };
