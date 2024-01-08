import { useEffect } from 'react';
import Book from '../../components/Book/Book';
import { useRTKDispatch, useRTKSelector } from '../../lib/hooks/useRTK';
import { fetchUserBooksStart } from '../../lib/redux/books/Books.slice';

const MyBooks = () => {
	const dispatch = useRTKDispatch();

	const books = useRTKSelector(state => state.booksReducer.userBooks);

	useEffect(() => {
		dispatch(fetchUserBooksStart());
	}, [dispatch]);

	return (
		<div className='w-full flex justify-center items-center'>
			<div className='w-full max-w-7xl h-full flex items-center justify-center p-5 flex-col gap-3'>
				<div className='w-fit h-fit flex flex-wrap items-stretch justify-center gap-3 md:gap-5 lg:gap-7'>
					{books.map(book => (
						<Book key={book._id} {...book} isAuthorBook />
					))}
				</div>
			</div>
		</div>
	);
};

export default MyBooks;
