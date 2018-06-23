import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import AppRouter from './js/components/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './js/reducers';
import initStore from './store';
import './index.css';

const store = initStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
