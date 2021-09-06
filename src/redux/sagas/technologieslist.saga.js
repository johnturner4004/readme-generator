import { takeLatest } from "redux-saga/effects";
import axios from 'axios'
import { put } from "redux-saga/effects";

function* getTechnologieslist() {
  try{
    const response = yield axios.get(`api/technologieslist`)
    yield put({ type: 'SET_TECHNOLOGIESLIST', payload: response.data })
  } catch(error) {
    console.log(`Unable to get technologieslist: ${error}`)
  }
}

function* technologieslistSaga() {
  yield takeLatest('FETCH_TECHNOLOGIESLIST', getTechnologieslist)
}

export default technologieslistSaga;