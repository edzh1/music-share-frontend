import React, { useCallback } from "react";
import Search from "../components/Search";
import SearchResult from "../components/SearchResult";
import Meta from "../components/Meta";
import { useSelector, useDispatch } from "react-redux";
import * as selectors from "../redux/share/selectors";
import * as searchActions from "../redux/share/actions";

function ShareContainer() {
  const searchResult = useSelector(selectors.searchResult);
  const hasSearchResult = useSelector(selectors.hasSearchResult);
  const searchLoading = useSelector(selectors.searchLoading);
  const dispatch = useDispatch();
  const search = useCallback((query) => dispatch(searchActions.search(query)), [
    dispatch,
  ]);

  return (
    <div>
      <div>
        <h4>Search</h4>
        <Search onSearch={search} />
        {searchLoading && <p>Loading...</p>}
        {hasSearchResult && (
          <ul>
            {Object.keys(searchResult).map((resultKey) => (
              <SearchResult
                key={resultKey}
                provider={resultKey}
                link={searchResult[resultKey]}
              />
            ))}
          </ul>
        )}
      </div>
      <div>
        <Meta />
      </div>
    </div>
  );
}

export default ShareContainer;
