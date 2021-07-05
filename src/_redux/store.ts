import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootSaga } from './sagas';

const saga = createSagaMiddleware();

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(saga), (window as any).__REDUX_DEVTOOLS_EXTENSION__?.())
  );
  saga.run(rootSaga);
  return store;
};
