export const searchLoading = (state) => state.share.isLoading;
export const searchResult = (state) => state.share.searchResult;
export const hasSearchResult = (state) =>
  Object.keys(state.share.searchResult).length > 0;
