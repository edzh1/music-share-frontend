import React from "react";
import PropTypes from "prop-types";

function SearchResult({ provider, link }) {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {provider}
      </a>
    </li>
  );
}

export default SearchResult;

SearchResult.propTypes = {
  provider: PropTypes.string,
  link: PropTypes.string,
};
