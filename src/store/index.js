import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
// Reducers
import rootReducer from './reducers';

// Persistance configs:
const persistConfig = {
  key: `canuto-${window.location.host}`,
  storage,
};

// Other configs:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const middleware = applyMiddleware(thunk);
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store:
const store = createStore(
  persistedReducer, 
  initialState, 
  composeEnhancers(middleware)
);

// Persistor:
const persistor = persistStore(store);

// Export
export { store, persistor };