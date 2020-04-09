import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from "./types";

const initialState = {
  isLoading: false,
  hasError: false,
  searchResult: [],
};

export function share(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        searchResult: initialState.searchResult,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResult: action.payload,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
