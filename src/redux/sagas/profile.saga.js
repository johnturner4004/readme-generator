import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* sendProfile(action) {
  try{
    yield axios.post('api/user/profile', action.data);
  } catch (error) {
    console.log(`Error sending profile: ${error}`);
  }
}

function* profileSaga() {
  yield takeLatest('NEW_PROFILE', sendProfile);
};

export default profileSaga;