import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers/index';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const DEV_TOOLS = () => {
  const devTools = f => f;
  if (typeof window !== 'undefined') {
    return typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : devTools;
  }
  return devTools;
};

export const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware), DEV_TOOLS())
);

sagaMiddleware.run(rootSaga);
