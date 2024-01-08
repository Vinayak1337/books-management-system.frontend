import { all, call } from 'redux-saga/effects';
import authSaga from '../auth/Auth.saga';
import booksSaga from '../books/Books.saga';

export default function* rootSaga() {
	yield all([call(authSaga), call(booksSaga)]);
}
