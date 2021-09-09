import { all } from 'redux-saga/effects';
import technologiesSaga from './technologies.saga';
import licenseListSaga from './licenseList.saga'

function* rootSaga () {
  yield all([
    technologiesSaga(),
    licenseListSaga()
  ]);
}

export default rootSaga;