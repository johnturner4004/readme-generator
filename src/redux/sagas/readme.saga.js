import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getReadmeList() {
  try{
    const response = yield axios.get('api/readme/');
    console.log('response' + response);

    yield put({ type: 'SET_MY_FILES', payload: response.data})
  } catch (error) {
    console.log(`Error sending profile: ${error}`);
  }
}

function* readmeSaga() {
  yield takeLatest('FETCH_MY_FILES', getReadmeList);
};

export default readmeSaga;