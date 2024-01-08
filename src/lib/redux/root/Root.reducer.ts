import { combineReducers } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import authReducer from '../auth/Auth.slice';
import booksReducer from '../books/Books.slice';

const persistConfig = {
	key: 'bookstore',
	storage,
	whitelist: ['token']
};

const persistConfigSession = {
	key: 'bookstore',
	storage: storageSession,
	whitelist: ['authReducer', 'booksReducer']
};

const rootReducer = combineReducers({
	booksReducer,
	authReducer: persistReducer(persistConfig, authReducer)
});

export const persistedReducer = persistReducer(
	persistConfigSession,
	rootReducer
);

export default rootReducer;
