import { takeLatest } from "redux-saga/effects";
import axios from 'axios'
import { put } from "redux-saga/effects";

function* getLicenseList() {
  try{
    // const response = yield axios.get(`api/technologies/list`)
  } catch(error) {
    console.log(`Unable to get license list: ${error}`)
  }
}

function* licenseListSaga() {
  yield takeLatest('FETCH_LICENSE_LIST', getLicenseList)
}

export default licenseListSaga;