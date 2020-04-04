import React from 'react';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';
import Meta from '../components/Meta';

function ShareContainer() {
  return (
    <div>
      <div>
        <h4>
          Search
        </h4>
        <Search />
        <SearchResults />
      </div>
      <div>
        <Meta />
      </div>
    </div>
  );
}

export default ShareContainer;
