import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
console.log(persistedContactsReducer);
console.log(contactSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
  // middleware: getDefaultMidleware => [...getDefaultMidleware(), logger],
});

export const persistor = persistStore(store);
