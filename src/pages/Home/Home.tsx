import { useEffect } from 'react';
import { useRTKDispatch, useRTKSelector } from '../../lib/hooks/useRTK';
import {
	fetchBooksStart,
	setPageNumber
} from '../../lib/redux/books/Books.slice';
import Pagination from '../../components/Pagination/Pagination';
import Book from '../../components/Book/Book';

const Home = () => {
	const dispatch = useRTKDispatch();

	const { total, books, page } = useRTKSelector(
		state => state.booksReducer.publishedBooks
	);

	const setPage = (page: number) => dispatch(setPageNumber(page));

	useEffect(() => {
		dispatch(fetchBooksStart({ page, limit: 10 }));
	}, [dispatch, page]);

	return (
		<div className='w-full flex justify-center items-center'>
			<div className='w-full max-w-7xl h-full flex items-center justify-center p-5 flex-col gap-3'>
				<div className='w-fit h-fit flex flex-wrap items-stretch justify-center gap-3 md:gap-5 lg:gap-7'>
					{books.map(book => (
						<Book key={book._id} {...book} />
					))}
				</div>
				<div className='w-fit'>
					<Pagination page={page} totalItems={total} setPage={setPage} />
				</div>
			</div>
		</div>
	);
};

export default Home;
