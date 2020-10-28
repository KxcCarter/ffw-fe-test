import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './redux/reducers/_rootReducer';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();

// Remove redux logger before submitting
const middlewareList = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewareList));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
