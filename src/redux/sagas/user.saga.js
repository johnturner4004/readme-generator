import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUser() {
  try{
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
    
    const response = yield axios.get('/api/user', config);

    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log(`Error while logging in: ${error}`);
  };
};

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
};

export default userSaga;