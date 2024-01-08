import { useState } from 'react';
import { useRTKDispatch } from '../../lib/hooks/useRTK';
import { publishBookStart } from '../../lib/redux/books/Books.slice';

const PublishBook = () => {
	const [book, setBook] = useState({
		title: '',
		description: '',
		thumbnail: null as File | null
	});

	const dispatch = useRTKDispatch();

	const changeState = (newState: Partial<typeof book>) =>
		setBook(p => ({ ...p, ...newState }));

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault();

		if (!book.thumbnail) return;

		dispatch(
			publishBookStart({
				...book,
				thumbnail: book.thumbnail
			})
		);
	};

	return (
		<div className='w-full flex justify-center items-center px-5'>
			<form
				onSubmit={handleSubmit}
				className='shadow-nav py-3 px-5 mt-10 rounded-md'>
				<div className='flex flex-col gap-4'>
					<input
						className='border border-gray-300 rounded-md p-2 outline-primary'
						type='text'
						placeholder='Title'
						value={book.title}
						onChange={e => changeState({ title: e.target.value })}
						required
						pattern='.{3,}'
						title='3 characters minimum'
					/>
					<textarea
						className='border border-gray-300 rounded-md p-2 outline-primary'
						placeholder='Description'
						value={book.description}
						onChange={e => changeState({ description: e.target.value })}
					/>
					<input
						className='border border-gray-300 rounded-md p-2 outline-primary'
						type='file'
						accept='image/*'
						placeholder='Thumbnail URL'
						onChange={e => changeState({ thumbnail: e.target.files?.[0] })}
						required
					/>

					<button
						className='bg-primary text-white rounded-md p-2'
						type='submit'>
						Publish
					</button>
				</div>
			</form>
		</div>
	);
};

export default PublishBook;
