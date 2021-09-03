import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { rootReducer } from './rootReducer';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// eslint-disable-next-line no-undef
const NODE_ENV = process.env.NODE_ENV;

const logger = createLogger({
  diff: true,
  duration: true,
  logErrors: true,
  collapsed: (getState, action, logEntry) => !logEntry.error,
  predicate: () => {
    switch (NODE_ENV) {
      case 'test':
        return false;
      case 'production':
        return false;
      default:
        return true;
    }
  },
});

const initialState = {};
const middlewares = [ logger ];

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [
    'redux__ui',
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const devTools =
  NODE_ENV === 'production'
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares, logger));

const store = createStore(persistedReducer, initialState, devTools);

const reduxPersistor = persistStore(store);
export { store, reduxPersistor };
