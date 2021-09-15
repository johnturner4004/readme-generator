import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* login(action) {
  try{
    const config = {
      headers: { 'Content-Type': 'application/json'},
      withCredentials: true,
    };

    yield axios.post('/api/user/login', action.payload, config);

    yield put({ type: 'FETCH_USER' })
  } catch (error) { 
    console.log(`Error logging in user: ${error}`);
  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', login);
}

export default loginSaga;