import Saga from 'redux-saga';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
import { configureStore, Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootSaga from './root/Root.saga';
import { persistedReducer } from './root/Root.reducer';

const sagaMiddleware = Saga();

const middlewares: Middleware[] = [sagaMiddleware];

if (import.meta.env.DEV) middlewares.push(logger as Middleware);

const Store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(middlewares)
});

export const persistor = persistStore(Store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof Store.getState>;

export type RootDispatch = typeof Store.dispatch;

export default Store;
