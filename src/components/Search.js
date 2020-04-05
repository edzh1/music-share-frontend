import React, { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={() => onSearch(query)}>Search</Button>
    </div>
  );
}

export default Search;

Search.propTypes = {
  onSearch: PropTypes.func,
};
