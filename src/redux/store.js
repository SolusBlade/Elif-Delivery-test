import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shop/shopSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistShopConfig = {
  key: 'cart',
  storage,
  whitelist: [`cart`],
};

const persistedShopReducer = persistReducer(persistShopConfig, shopReducer);

export const store = configureStore({
  reducer: {
    shop: persistedShopReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
