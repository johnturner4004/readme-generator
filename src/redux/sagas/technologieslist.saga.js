import { takeLatest, yield } from "@redux-saga/core/effects";
import axios from 'axios'

function* getTechnologieslist(action) {
  try{
    const response = yield axios.get(`api/technologieslist`)
    console.log(response);
  } catch(error) {
    console.log(`Unable to get technologieslist: ${error}`)
  }
}

function* technologieslistSaga() {
  yield takeLatest('FETCH_TECHNOLOGIESLIST', getTechnologieslist)
}

export default technologieslistSaga();