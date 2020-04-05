import { ADD_SEARCH_RESULT } from "./types";

export function addSearchResult(text) {
  return { type: ADD_SEARCH_RESULT, text };
}
