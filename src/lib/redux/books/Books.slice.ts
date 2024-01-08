import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BooksState {
	publishedBooks: {
		total: number;
		books: Book[];
		page: number;
	};
	userBooks: Book[];
	queryBooks: Book[];
	queryTitle: string;
}

const initialState: BooksState = {
	publishedBooks: {
		total: 0,
		books: [],
		page: 1
	},
	userBooks: [],
	queryBooks: [],
	queryTitle: ''
};

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		fetchBooksStart: (
			_,
			__: PayloadAction<{
				page: number;
				limit: number;
			}>
		) => {},
		fetchBooksSuccess: (
			state,
			{ payload }: PayloadAction<{ total: number; books: Book[] }>
		) => {
			state.publishedBooks.books = payload.books;
			state.publishedBooks.total = payload.total;
		},
		fetchUserBooksStart: () => {},
		fetchUserBooksSuccess: (state, { payload }: PayloadAction<Book[]>) => {
			state.userBooks = payload;
		},
		fetchQueryBooksStart: (_, __: PayloadAction<string>) => {},
		fetchQueryBooksSuccess: (state, { payload }: PayloadAction<Book[]>) => {
			state.queryBooks = payload;
		},
		publishBookStart: (
			_,
			__: PayloadAction<{
				title: string;
				description?: string;
				thumbnail: File;
			}>
		) => {},
		unpublishBookStart: (_, __: PayloadAction<string>) => {},
		unpublishBookSuccess: (state, { payload }: PayloadAction<string>) => {
			state.userBooks = state.userBooks.filter(book => book._id !== payload);
		},
		setPageNumber: (state, { payload }: PayloadAction<number>) => {
			state.publishedBooks.page = payload;
		},
		setQueryTitle: (state, { payload }: PayloadAction<string>) => {
			state.queryTitle = payload;
		}
	}
});

export const {
	fetchBooksStart,
	fetchBooksSuccess,
	fetchUserBooksStart,
	fetchUserBooksSuccess,
	fetchQueryBooksStart,
	fetchQueryBooksSuccess,
	publishBookStart,
	unpublishBookStart,
	setPageNumber,
	unpublishBookSuccess,
	setQueryTitle
} = booksSlice.actions;

const booksReducer = booksSlice.reducer;

export default booksReducer;
