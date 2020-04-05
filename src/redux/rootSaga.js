import { all } from 'redux-saga/effects'
import * as shareSagas from './share/sagas'

export default function* rootSaga() {
  yield all([
    shareSagas.watchShareAsync(),
  ])
}