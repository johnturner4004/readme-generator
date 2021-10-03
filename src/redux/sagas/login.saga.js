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
    yield put({ type: 'FETCH_MY_FILES' })
  } catch (error) { 
    console.log(`Error logging in user: ${error}`);
  }
}

function* logout() {
  try{
    const config = {
      headers: { 'Content-Type': 'application/json'},
      withCredentials: true,
    }

    axios.post('/api/user/logout', config);

    yield put({ type: 'CLEAR_USER' });
  } catch (error) {

  }
}

function* loginSaga() {
  yield takeLatest('LOGIN', login);
  yield takeLatest('LOGOUT', logout);
}

export default loginSaga;