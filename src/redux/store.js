/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '~/redux/reducers/rootReducer';
import rootSaga from '~/redux/sagas/rootSaga';

// I leave it so that you can check it in your browser on production :)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        devTools,
    ),
);

sagaMiddleware.run(rootSaga);

export default store;
