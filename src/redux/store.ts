import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { reducer } from './reduces/reducer';
import RootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const store=configureStore({
    middleware: defaultMiddleware =>
    defaultMiddleware({thunk: false}).prepend(sagaMiddleWare),
  reducer: {
    reducer: reducer,
    
  },
});

sagaMiddleWare.run(RootSaga);
export default store;