import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import './index.css';
import rootReducer from './redux/reducer/_root.reducer';
import rootSaga from './redux/sagas/_root.saga';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { theme } from './Theme/Theme';

const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] : 
  [sagaMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList)
);

sagaMiddleware.run( rootSaga );

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
