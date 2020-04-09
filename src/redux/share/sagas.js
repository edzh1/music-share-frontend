import { put, takeLatest, call } from "redux-saga/effects";
import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE } from "./types";
import { searchAPI } from "./api";

function* search(action) {
  try {
    const result = yield call(searchAPI, action.payload);
    yield put({ type: SEARCH_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: SEARCH_FAILURE });
  }
}

function* watchSearch() {
  yield takeLatest(SEARCH, search);
}

export { watchSearch };
