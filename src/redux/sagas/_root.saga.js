import { all } from 'redux-saga/effects';
import licenseListSaga from './licenses.saga';
import loginSaga from './login.saga';
import profileSaga from './profile.saga';
import technologiesSaga from './technologies.saga';
import userSaga from './user.saga';
import readmeSaga from './readme.saga';

function* rootSaga () {
  yield all([
    licenseListSaga(),
    loginSaga(),
    profileSaga(),
    technologiesSaga(),
    userSaga(),
    readmeSaga(),
  ]);
}

export default rootSaga;