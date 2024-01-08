import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
	<div className='bg-auth-bg bg-cover bg-top bg-no-repeat w-full h-full flex justify-around'>
		<div className='flex flex-col gap-6 mt-24'>
			<img className='w-12 h-12' src='/logo.svg' alt='logo' />

			<Outlet />
		</div>
		<span />
	</div>
);

export default AuthLayout;
