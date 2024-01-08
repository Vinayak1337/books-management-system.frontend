import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRTKDispatch } from '../../lib/hooks/useRTK';
import { logoutUser } from '../../lib/redux/auth/Auth.slice';
import NavbarItem from './NavbarItem';
import { ROUTER_PATH_NAMES } from '../../lib/constants/path';
import clsx from 'clsx';

const Navbar = () => {
	const location = useLocation(),
		dispatch = useRTKDispatch();

	const [isSidebarActive, setSidebar] = useState(false);

	const closeSidebar = () => setSidebar(false),
		toggleSidebar = () => setSidebar(p => !p),
		logout = () => dispatch(logoutUser());

	return (
		<div className='w-full'>
			<div
				className={clsx('fixed w-screen h-screen z-40 bg-black-fade', {
					hidden: !isSidebarActive,
					block: isSidebarActive
				})}
				onClick={closeSidebar}
			/>
			<div
				className={clsx(
					'flex z-50 bg-white justify-between px-6 md:px-4 shadow-nav lg:px-18 py-1 items-center',
					{
						'overflow-clip': !isSidebarActive
					}
				)}>
				<Link to='/'>
					<img className='w-10 h-10' src='/logo.svg' alt='Logo' />
				</Link>
				<div className='flex gap-2 md:gap-7 items-center w-full lg:w-fit relative'>
					<div
						className={clsx(
							'z-50 w-2/3 max-w-xs h-screen flex-col absolute -right-4 -top-6 bg-white transition-500',
							'lg:z-30 lg:relative lg:flex-row lg:h-fit lg:max-w-none lg:w-fit lg:top-0 lg:right-0 lg:self-start',
							{
								'lg:translate-x-0 translate-x-full': !isSidebarActive,
								'translate-x-0': isSidebarActive
							}
						)}>
						<div className='relative z-50 flex flex-col items-center w-full'>
							<div
								className={clsx(
									'flex-center top-5 w-10 h-10 z-10 relative cursor-pointer transition-500 -left-[55%]',
									'lg:hidden',
									{
										'-left-[39%]': isSidebarActive
									}
								)}
								onClick={toggleSidebar}>
								<span
									className={clsx(
										'burger-icon absolute z-50 self-center bg-slate-900',
										{
											open: isSidebarActive
										}
									)}
								/>
							</div>
							<div
								className='mt-3 lg:mt-0 flex flex-col gap-2 w-full px-3 lg:flex-row lg:px-0 lg:gap-7'
								onClick={closeSidebar}>
								<NavbarItem
									href={ROUTER_PATH_NAMES.HOME}
									currentLocation={location.pathname}>
									Home
								</NavbarItem>
								<NavbarItem
									href={ROUTER_PATH_NAMES.SEARCH_BOOKS}
									currentLocation={location.pathname}>
									Search Books
								</NavbarItem>
								<NavbarItem
									href={ROUTER_PATH_NAMES.MY_BOOKS}
									currentLocation={location.pathname}>
									My Books
								</NavbarItem>
								<NavbarItem
									href={ROUTER_PATH_NAMES.PUBLISH_BOOK}
									currentLocation={location.pathname}>
									Publish Book
								</NavbarItem>
								<NavbarItem
									handleClick={logout}
									href={ROUTER_PATH_NAMES.LOGOUT}
									currentLocation={location.pathname}>
									Logout
								</NavbarItem>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
