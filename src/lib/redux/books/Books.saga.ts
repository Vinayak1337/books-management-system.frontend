import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
	fetchBooksStart,
	fetchBooksSuccess,
	fetchQueryBooksStart,
	fetchQueryBooksSuccess,
	fetchUserBooksStart,
	fetchUserBooksSuccess,
	publishBookStart,
	unpublishBookStart,
	unpublishBookSuccess
} from './Books.slice';
import { API_PATH_NAMES } from '../../constants/path';
import promiseToast, { serializeError } from '../../hooks/promiseToast';

function* fetchPublishedBooks(action: ReturnType<typeof fetchBooksStart>) {
	try {
		promiseToast({
			id: fetchBooksStart.type,
			message: 'Fetching books...'
		});

		const { data } = yield axios.get(API_PATH_NAMES.BOOKS, {
			params: { ...action.payload }
		});

		promiseToast({
			id: fetchBooksStart.type,
			status: 'success',
			message: 'Fetched books!'
		});
		yield put(fetchBooksSuccess(data));
	} catch (error) {
		console.error(error);

		promiseToast({
			id: fetchBooksStart.type,
			status: 'error',
			message: serializeError(error, '', 'fetching books')
		});
	}
}

function* fetchUserBooks() {
	try {
		promiseToast({
			id: fetchUserBooksStart.type,
			message: 'Fetching your books...'
		});

		const { data } = yield axios.get(API_PATH_NAMES.MY_BOOKS);

		promiseToast({
			id: fetchUserBooksStart.type,
			status: 'success',
			message: 'Fetched books!'
		});
		yield put(fetchUserBooksSuccess(data));
	} catch (error) {
		console.error(error);

		promiseToast({
			id: fetchUserBooksStart.type,
			status: 'error',
			message: serializeError(error, '', 'fetching books')
		});
	}
}

function* fetchQueryBooks(action: ReturnType<typeof fetchQueryBooksStart>) {
	try {
		promiseToast({
			id: fetchQueryBooksStart.type,
			message: 'Fetching books...'
		});

		const { data } = yield axios.get(API_PATH_NAMES.SEARCH_BOOKS, {
			params: { title: action.payload }
		});

		promiseToast({
			id: fetchQueryBooksStart.type,
			status: 'success',
			message: 'Fetched books!'
		});

		yield put(fetchQueryBooksSuccess(data));
	} catch (error) {
		console.error(error);

		promiseToast({
			id: fetchQueryBooksStart.type,
			status: 'error',
			message: serializeError(error, '', 'fetching books')
		});
	}
}

function* publishBook(action: ReturnType<typeof publishBookStart>) {
	try {
		promiseToast({
			id: publishBookStart.type,
			message: `Publishing ${action.payload.title} book...`
		});

		const formData = new FormData();

		formData.append('title', action.payload.title);
		formData.append('description', action.payload.description || '');
		formData.append('thumbnail', action.payload.thumbnail as File);

		const { data } = yield axios.post(API_PATH_NAMES.PUBLISH_BOOK, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});

		promiseToast({
			id: publishBookStart.type,
			message: `Successfully published ${data.title} book!`,
			status: 'success'
		});
	} catch (error) {
		console.error(error);

		promiseToast({
			id: publishBookStart.type,
			message: serializeError(error, 'Book with entered title', 'publishing'),
			status: 'error'
		});
	}
}

function* unpublishBook(action: ReturnType<typeof unpublishBookStart>) {
	try {
		promiseToast({
			id: unpublishBookStart.type,
			message: 'Unpublishing book...'
		});

		yield axios.delete(`${API_PATH_NAMES.UNPUBLISH_BOOK}/${action.payload}`);

		promiseToast({
			id: unpublishBookStart.type,
			message: 'Successfully unpublished the book!',
			status: 'success'
		});

		yield put(unpublishBookSuccess(action.payload));
	} catch (error) {
		console.error(error);

		promiseToast({
			id: unpublishBookStart.type,
			message: serializeError(error, '', 'unpublishing'),
			status: 'error'
		});
	}
}

function* watchFetchBooks() {
	yield takeLatest(fetchBooksStart.type, fetchPublishedBooks);
}

function* watchFetchUserBooks() {
	yield takeLatest(fetchUserBooksStart.type, fetchUserBooks);
}

function* watchFetchQueryBooks() {
	yield takeLatest(fetchQueryBooksStart.type, fetchQueryBooks);
}

function* watchPublishBook() {
	yield takeLatest(publishBookStart.type, publishBook);
}

function* watchUnpublishBook() {
	yield takeLatest(unpublishBookStart.type, unpublishBook);
}

export default function* booksSaga() {
	yield all([
		call(watchFetchBooks),
		call(watchFetchUserBooks),
		call(watchFetchQueryBooks),
		call(watchPublishBook),
		call(watchUnpublishBook)
	]);
}
