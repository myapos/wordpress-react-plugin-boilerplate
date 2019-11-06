import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import createSagaMiddleware from 'redux-saga';

import { createBrowserHistory } from 'history';

import rootSaga from './sagas';
import rootReducer from './reducers';
import initialState from './initialState';

export const history = createBrowserHistory();

function configureStore () {
  const sagaMiddleware = createSagaMiddleware();

  const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
      persistedReducer,
    }),
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, routerMiddleware(history), // for dispatching history actions
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'ReactWordpressPlugin' }) : f => f)
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;
