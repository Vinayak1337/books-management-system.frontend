import { FC } from 'react';
import { useRTKDispatch } from '../../lib/hooks/useRTK';
import { unpublishBookStart } from '../../lib/redux/books/Books.slice';

const Book: FC<Book & { isAuthorBook?: boolean }> = ({
	_id,
	title,
	description,
	isAuthorBook = false
}) => {
	const url = `${import.meta.env.VITE_API_URL}/api/books/${_id}/thumbnail`;

	const dispatch = useRTKDispatch();

	const unpublishBook = () => dispatch(unpublishBookStart(_id));

	return (
		<div className='flex flex-col w-fit overflow-hidden rounded-lg bg-gray-700 shadow-lg'>
			<img className='w-80 h-64' src={url} alt='' />
			<div className='p-5'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight dark:text-white text-gray-900'>
					{title}
				</h5>
				{description && (
					<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						{description}
					</p>
				)}
				{isAuthorBook && (
					<button
						onClick={unpublishBook}
						className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
						Unpublish
					</button>
				)}
			</div>
		</div>
	);
};

export default Book;
