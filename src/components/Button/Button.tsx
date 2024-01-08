import clsx from 'clsx';
import { FC } from 'react';

const ThemeBtn: FC<ThemeBtnProps> = ({
	onClick: handleClick,
	children,
	disabled = false,
	hasFullWidth = false,
	className = '',
	type = 'button'
}) => (
	<button
		disabled={disabled}
		onClick={handleClick}
		type={type}
		className={clsx(
			'bg-secondary self-center flex items-center justify-center gap-1 rounded-md font-medium text-sm tracking-widest py-3 px-8 cursor-pointer',
			{
				'w-full mx-6': hasFullWidth
			},
			className
		)}>
		{children}
	</button>
);

export default ThemeBtn;

interface ThemeBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	hasFullWidth?: boolean;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
}
