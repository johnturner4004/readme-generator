import { all, takeLatest } from 'redux-saga/effects';
import technologiesListSaga from './technologieslist.saga';

export default function* rootSaga () {
  yield all([
    technologiesListSaga(),
  ])
}