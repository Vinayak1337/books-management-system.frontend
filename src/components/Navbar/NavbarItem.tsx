import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

const NavbarItem: FC<NavbarItemProps> = ({
	href,
	children,
	currentLocation,
	handleClick
}) => (
	<Link
		onClick={handleClick}
		to={href}
		className={clsx('font-bold text-base hover:text-primary cursor-pointer', {
			'text-primary': currentLocation === href
		})}>
		{children}
	</Link>
);

export default NavbarItem;

interface NavbarItemProps {
	children: ReactNode;
	href: string;
	currentLocation: string;
	handleClick?: () => void;
}
