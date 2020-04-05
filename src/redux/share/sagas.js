import { put, takeEvery } from 'redux-saga/effects'
import { SEARCH, SHARE_DONE } from './types'

const delay = (ms) => new Promise(res => setTimeout(res, ms))


function* shareAsync() {
  yield delay(1000)
  yield put({ type: SHARE_DONE })
}

function* watchShareAsync() {
  yield takeEvery(SEARCH, shareAsync)
}

export {
  watchShareAsync
}