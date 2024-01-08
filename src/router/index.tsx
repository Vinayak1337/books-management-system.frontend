import { useEffect } from 'react';
import { useRTKSelector } from '../lib/hooks/useRTK';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';
import axios from 'axios';

const Router = () => {
	const token = useRTKSelector(state => state.authReducer.token);

	useEffect(() => {
		globalThis.axios = axios.create({
			baseURL: import.meta.env.VITE_API_URL + '/api',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
	}, [token]);

	return token ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default Router;
