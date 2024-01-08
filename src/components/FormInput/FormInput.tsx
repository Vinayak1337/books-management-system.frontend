import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid';
import { FC, useState } from 'react';

const FormInput: FC<FormInputProps> = ({
	value,
	onChange,
	name,
	placeholder,
	type = 'text',
	...restProps
}) => {
	const [visible, setVisible] = useState(false);
	const isPassword = type === 'password';

	const toggleVisibility: React.MouseEventHandler<HTMLButtonElement> = e => {
		e.preventDefault();
		e.stopPropagation();

		setVisible(p => !p);
	};

	return (
		<div className='w-94 flex flex-col gap-4 relative'>
			<label
				className='text-base font-medium text-midnight capitalize'
				htmlFor={name}>
				{name}
			</label>
			<input
				{...restProps}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				type={visible ? 'text' : type}
				className='w-full flex-grow h-12 bg-primary-form border-none text-sm flex items-center pl-4 outline-none rounded-lg'
				required
			/>
			{isPassword && (
				<button
					className='text-primary-600 absolute z-10 right-5 bottom-3 w-6 h-6 cursor-pointer flex justify-center'
					onClick={toggleVisibility}>
					{visible ? <EyeIcon /> : <EyeSlashIcon />}
				</button>
			)}
		</div>
	);
};

export default FormInput;

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	value?: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	type?: 'text' | 'password' | 'email';
}
