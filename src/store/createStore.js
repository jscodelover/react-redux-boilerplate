import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';

import rootReducer from 'store/reducers';
import rootSaga from 'store/rootSaga';

const persistConfig = {
  key: 'root',
  storage,
};

const history = createBrowserHistory(); // eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


// check persistreducer
const store = createStore(persistReducer(persistConfig, rootReducer),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export { store, history };


// app will not be persisted.