import { all } from 'redux-saga/effects';
import technologiesSaga from './technologies.saga';
import licenseListSaga from './licenses.saga';
import userSaga from './user.saga';
import loginSaga from './login.saga';

function* rootSaga () {
  yield all([
    technologiesSaga(),
    licenseListSaga(),
    userSaga(),
    loginSaga(),
  ]);
}

export default rootSaga;