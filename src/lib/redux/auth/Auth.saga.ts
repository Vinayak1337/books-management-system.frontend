/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	loginUserStart,
	loginUserSuccess,
	registerUserStart
} from './Auth.slice';
import { API_PATH_NAMES } from '../../constants/path';
import promiseToast, { serializeError } from '../../hooks/promiseToast';

function* loginUser(action: ReturnType<typeof loginUserStart>) {
	try {
		promiseToast({
			id: 'user-login',
			message: 'Logging in...'
		});

		const { data } = yield axios.post(API_PATH_NAMES.LOGIN, action.payload);

		promiseToast({
			id: 'user-login',
			status: 'success',
			message: 'Logged in'
		});

		yield put(loginUserSuccess(data));
	} catch (error: any) {
		console.error(error);

		promiseToast({
			id: 'user-login',
			status: 'error',
			message: serializeError(error, 'Email', 'logging in')
		});
	}
}

function* registerUser(action: ReturnType<typeof registerUserStart>) {
	try {
		promiseToast({
			id: 'user-registration',
			message: 'Registering...'
		});

		const { data } = yield axios.post(API_PATH_NAMES.REGISTER, action.payload);

		promiseToast({
			id: 'user-registration',
			status: 'success',
			message: 'Registered successfully'
		});

		yield put(loginUserSuccess(data));
	} catch (error: any) {
		console.error(error);

		promiseToast({
			id: 'user-registration',
			status: 'error',
			message: serializeError(error, 'Email', 'registering')
		});
	}
}

function* watchLoginUser() {
	yield takeLatest(loginUserStart.type, loginUser);
}

function* watchRegisterUser() {
	yield takeLatest(registerUserStart.type, registerUser);
}

export default function* authSaga() {
	yield all([call(watchLoginUser), call(watchRegisterUser)]);
}
