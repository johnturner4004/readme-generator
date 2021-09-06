import { all } from 'redux-saga/effects';
import technologieslistSaga from './technologieslist.saga';
import licenseListSaga from './licenseList.saga'

function* rootSaga () {
  yield all([
    technologieslistSaga(),
    licenseListSaga()
  ]);
}

export default rootSaga;