import { FC } from 'react';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';
import { ROUTER_PATH_NAMES } from '../../lib/constants/path';

const ErrorPage: FC = () => (
	<div className='wrapper_404'>
		<img
			src='https://d37772fpgg0hig.cloudfront.net/assets/images/LMS/assets/404.webp'
			alt='404'
		/>
		<div className='right'>
			<h1>Page not found!</h1>
			<p>
				We are sorry, the page you have requested could not be found. Please go
				back to the HomePage.
			</p>
			<Link to={ROUTER_PATH_NAMES.HOME}>
				<button>Go to HomePage</button>
			</Link>
		</div>
	</div>
);

export default ErrorPage;
