import { createStore } from 'redux';
import { persistStore, persistReducer, getStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './reducers';

const persistConfig = {
    key: 'viuLiveAppSetting',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);


export {store, persistor};