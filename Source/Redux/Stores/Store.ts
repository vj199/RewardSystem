import {AppReducer} from '@redux/Slices/AppSlice';
import {LoaderReducer} from '@redux/Slices/LoaderSlice';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const combinedReducers = combineReducers({
  app: AppReducer,
  loader: LoaderReducer,
});

const persistConfig = {
  key: 'Renown',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const middleware = [
  ...getDefaultMiddleware({thunk: false, serializableCheck: false}),
];

export const Stores = configureStore({
  reducer: persistedReducer,
  middleware,
});

export type RootState = ReturnType<typeof Stores.getState>;
export type AppDispatch = typeof Stores.dispatch;
