import { all } from 'redux-saga/effects';
import technologiesSaga from './technologies.saga';
import licenseListSaga from './licenses.saga'

function* rootSaga () {
  yield all([
    technologiesSaga(),
    licenseListSaga()
  ]);
}

export default rootSaga;