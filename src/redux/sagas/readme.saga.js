import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getReadmeList() {
  try{
    const response = yield axios.get('api/readme/');
    yield put({ type: 'SET_MY_FILES', payload: response.data})
  } catch (error) {
    console.log(`Error getting file list: ${error}`);
  };
};

function* getSelectedReadme(action) {
  try{
    const id = action.payload
    const response = yield axios.get(`api/readme/${id}`);
    yield put({ type: 'SET_SELECTED_FILE', payload: response.data });
  } catch (error) {
    console.log(`Error getting selected file: ${error}`);
  };
};

function* createNewReadme(action) {
  try{
  const projectName = action.payload;
  const response = yield axios.post('api/readme/', { project_name: projectName });
  const id = response.data[0].id;
  yield put({ type: 'FETCH_SELECTED_FILE', payload: id })
  } catch (error) {
    console.log(`Error creating new file: ${error}`);
  };
};

function* readmeSaga() {
  yield takeLatest('FETCH_MY_FILES', getReadmeList);
  yield takeLatest('FETCH_SELECTED_FILE', getSelectedReadme);
  yield takeLatest('CREATE_NEW_FILE', createNewReadme);
};

export default readmeSaga;