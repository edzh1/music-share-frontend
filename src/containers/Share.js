import React from 'react';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import Meta from '../components/Meta';

function ShareContainer() {
  return (
    <div>
      <div>
        <h4>
          Search
        </h4>
        <Search />
        <ul>
          {['search result 1'].map(result =>
            <SearchResult key={result} />
          )}
        </ul>
      </div>
      <div>
        <Meta />
      </div>
    </div>
  );
}

export default ShareContainer;
