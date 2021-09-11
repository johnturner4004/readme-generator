import axios from 'axios';
import { put, takeLatest } from "redux-saga/effects";

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
    const response = yield axios.get(`api/technologies/selected`, {params: { reqArray: action.payload}})
    let htmlTagList = '';
    for(let entry of response.data) {
      htmlTagList += `<a href="${entry.documentationurl}"><img src="${entry.icon}" height="40px" width="40px" /></a> `;
    }
    yield put({ type: 'SET_TECHNOLOGIES_HTML_TAG_LIST', payload: htmlTagList})
  } catch(error) {
    console.log(`Unable to get technologies selected: ${error}`);
  }
}

function* technologiesSaga() {
  yield takeLatest('FETCH_TECHNOLOGIES_LIST', getTechnologiesList);
  yield takeLatest('FETCH_TECHNOLOGIES_SELECTED', getTechnologiesSelected);
}

export default technologiesSaga;