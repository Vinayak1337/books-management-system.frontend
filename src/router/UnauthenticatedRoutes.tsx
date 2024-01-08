import { Navigate, Route, Routes } from 'react-router-dom';
import { NAVIGATOR_ROUTES, ROUTER_PATH_NAMES } from '../lib/constants/path';
import AuthLayout from '../pages/Auth/AuthLayout';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

const UnauthenticatedRoutes = () => (
	<Routes key={NAVIGATOR_ROUTES.UNAUTHENTICATED_ROUTES}>
		<Route
			path={ROUTER_PATH_NAMES.NOT_FOUND}
			element={<Navigate to={ROUTER_PATH_NAMES.LOGIN} />}
		/>
		<Route path={ROUTER_PATH_NAMES.HOME} element={<AuthLayout />}>
			<Route index element={<Navigate to={ROUTER_PATH_NAMES.LOGIN} />} />
			<Route path={ROUTER_PATH_NAMES.LOGIN} element={<Login />} />
			<Route path={ROUTER_PATH_NAMES.REGISTER} element={<Register />} />
		</Route>
	</Routes>
);

export default UnauthenticatedRoutes;
