import { takeLatest } from "redux-saga/effects";
import axios from 'axios'
import { put } from "redux-saga/effects";

function* getLicenseList() {
  try{
    const response = yield axios.get(`/api/licenses/list`);
    yield put({ type: 'SET_LICENSE_LIST', payload: response.data})
  } catch(error) {
    console.log(`Unable to get license list: ${error}`)
  }
}

function* getSelectedLicense(action) {
  try{
    const response = yield axios.get(`/api/licenses/${action.payload}`)
    let license = response.data[0];
    let licenseTag = 
`<a href="${license.documentationurl}"><img src="${license.icon}" height=40 />${license.name}</a>`;
    yield put({ type: 'SET_LICENSE_TAG', payload: licenseTag });
  } catch (error) {
    console.log(`Unable to get selected license: ${error}`);
  }
}

function* licenseListSaga() {
  yield takeLatest('FETCH_LICENSE_LIST', getLicenseList)
  yield takeLatest('FETCH_SELECTED_LICENSE', getSelectedLicense)
}

export default licenseListSaga;