import { Link } from 'react-router-dom';
import ThemeBtn from '../../components/Button/Button';
import FormInput from '../../components/FormInput/FormInput';
import { useRTKDispatch, useRTKSelector } from '../../lib/hooks/useRTK';
import { registerUserStart, updateUser } from '../../lib/redux/auth/Auth.slice';
import { ROUTER_PATH_NAMES } from '../../lib/constants/path';

const Register = () => {
	const { email, password, name } = useRTKSelector(
		state => state.authReducer.user
	);

	const dispatch = useRTKDispatch();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(updateUser({ [e.target.name]: e.target.value }));

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(registerUserStart({ email, password, name }));
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-8'>
			<div className='flex flex-col gap-6'>
				<FormInput
					name='name'
					onChange={handleInputChange}
					placeholder='Enter your name'
					value={name}
					pattern='^[a-zA-Z- ]{3,}$'
					title='Must be at least 3 characters containing only letters, spaces, and hyphens.'
				/>
				<FormInput
					name='email'
					onChange={handleInputChange}
					placeholder='Enter your email'
					type='email'
					value={email}
					pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
					title='Must be a valid email.'
				/>
				<FormInput
					name='password'
					onChange={handleInputChange}
					placeholder='Enter your name'
					type='password'
					value={password}
					pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
					title='Must contain at least one number, uppercase and lowercase letter, and at least 6 or more characters.'
				/>
			</div>
			<div className='flex flex-col gap-5 items-end'>
				<ThemeBtn hasFullWidth type='submit'>
					Register
				</ThemeBtn>
				<Link
					to={ROUTER_PATH_NAMES.LOGIN}
					className='font-medium text-blue cursor-pointer'>
					Login?
				</Link>
			</div>
		</form>
	);
};

export default Register;
