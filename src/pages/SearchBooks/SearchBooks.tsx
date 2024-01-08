import { useRTKDispatch, useRTKSelector } from '../../lib/hooks/useRTK';
import {
	fetchQueryBooksStart,
	setQueryTitle
} from '../../lib/redux/books/Books.slice';
import Book from '../../components/Book/Book';

const SearchBooks = () => {
	const dispatch = useRTKDispatch();

	const books = useRTKSelector(state => state.booksReducer.queryBooks);
	const searchTitle = useRTKSelector(state => state.booksReducer.queryTitle);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(setQueryTitle(e.target.value));

	const searchBooks = () => {
		console.log(searchTitle, 'searchTitle');

		dispatch(fetchQueryBooksStart(searchTitle));
	};

	return (
		<div className='w-full flex justify-center items-center'>
			<div className='w-full max-w-7xl h-full flex items-center justify-center p-5 flex-col gap-3'>
				<div className='w-full max-w-xs'>
					<label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
						Search
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
							<svg
								className='w-4 h-4 text-gray-500 dark:text-gray-400'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'>
								<path
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
						</div>
						<input
							type='search'
							id='search'
							className='outline-none block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Search Title'
							required
							value={searchTitle}
							onChange={handleChange}
						/>
						<button
							onClick={searchBooks}
							type='button'
							className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							Search
						</button>
					</div>
				</div>
				<div className='w-fit h-fit flex flex-wrap items-stretch justify-center gap-3 md:gap-5 lg:gap-7'>
					{books.map(book => (
						<Book key={book._id} {...book} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchBooks;
