import { SEARCH } from "./types";

export function search(query) {
  return { type: SEARCH, payload: query };
}
