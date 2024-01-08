import clsx from 'clsx';
import { FC } from 'react';

const Pagination: FC<PaginationProps> = ({ page, totalItems, setPage }) => {
	const totalPages = Math.ceil(totalItems / 10);
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<ul className='inline-flex w-fit -space-x-px text-base rounded-md overflow-hidden text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
			<button
				disabled={page === 1}
				onClick={setPage.bind(null, page - 1)}
				className='disabled:cursor-not-allowed cursor-default flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
				Previous
			</button>
			{pages.map(p => (
				<Item key={p} title={p} selectedItem={page} handleClick={setPage} />
			))}
			<button
				disabled={page === totalPages}
				onClick={setPage.bind(null, page + 1)}
				className='disabled:cursor-not-allowed cursor-default flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
				Next
			</button>
		</ul>
	);
};

const Item: FC<{
	title: number;
	selectedItem: number;
	handleClick: (num: number) => void;
}> = ({ title, selectedItem, handleClick }) => (
	<button
		disabled={title === selectedItem}
		onClick={handleClick.bind(null, title)}
		className={clsx(
			'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default',
			{
				'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white cursor-not-allowed':
					title === selectedItem
			}
		)}>
		{title}
	</button>
);

export default Pagination;

export interface PaginationProps {
	page: number;
	totalItems: number;
	setPage: (page: number) => void;
}
