import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './js/reducers';
import rootSaga from './js/sagas';

const sagaMiddleware = createSagaMiddleware();

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}