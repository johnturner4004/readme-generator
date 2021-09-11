import { takeLatest } from "redux-saga/effects";
import axios from 'axios'
import { put } from "redux-saga/effects";
import qs from'qs'

function* getTechnologiesList() {
  try{
    const response = yield axios.get(`api/technologies/list`)
    yield put({ type: 'SET_TECHNOLOGIES_LIST', payload: response.data })
  } catch(error) {
    console.log(`Unable to get technologies list: ${error}`)
  }
}

function* getTechnologiesSelected(action) {
  try{
    console.log("payload", action.payload);
    const response = yield axios.get(`api/technologies/selected`, {params: { reqArray: action.payload}})
    console.log(response);
  } catch(error) {
    console.log(`Unable to get technologies selected: ${error}`);
  }
}

function* technologiesSaga() {
  yield takeLatest('FETCH_TECHNOLOGIES_LIST', getTechnologiesList);
  yield takeLatest('FETCH_TECHNOLOGIES_SELECTED', getTechnologiesSelected);
}

export default technologiesSaga;