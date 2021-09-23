import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* sendProfile(action) {
  try{
    console.log(`in new profile`);
    yield axios.post('api/user/profile', action.payload);
    yield put({ type: 'LOGIN', payload: action.payload });
  } catch (error) {
    console.log(`Error sending profile: ${error}`);
  }
}

function* profileSaga() {
  yield takeLatest('NEW_PROFILE', sendProfile);
};

export default profileSaga;