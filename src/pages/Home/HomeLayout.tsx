import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
	return (
		<div className='w-full min-h-dvh'>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default HomeLayout;
