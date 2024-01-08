import { Navigate, Route, Routes } from 'react-router-dom';
import { NAVIGATOR_ROUTES, ROUTER_PATH_NAMES } from '../lib/constants/path';
import HomeLayout from '../pages/Home/HomeLayout';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PublishBook from '../pages/PublishBook/PublishBook';
import SearchBooks from '../pages/SearchBooks/SearchBooks';
import MyBooks from '../pages/MyBooks/MyBooks';

const AuthenticatedRoutes = () => (
	<Routes key={NAVIGATOR_ROUTES.AUTHENTICATED_ROUTES}>
		<Route path={ROUTER_PATH_NAMES.HOME} element={<HomeLayout />}>
			<Route index element={<Home />} />
			<Route path={ROUTER_PATH_NAMES.PUBLISH_BOOK} element={<PublishBook />} />
			<Route path={ROUTER_PATH_NAMES.SEARCH_BOOKS} element={<SearchBooks />} />
			<Route path={ROUTER_PATH_NAMES.MY_BOOKS} element={<MyBooks />} />
			<Route path={ROUTER_PATH_NAMES.NOT_FOUND} element={<ErrorPage />} />

			<Route
				path={ROUTER_PATH_NAMES.REGISTER}
				element={<Navigate to={ROUTER_PATH_NAMES.HOME} />}
			/>
			<Route
				path={ROUTER_PATH_NAMES.LOGIN}
				element={<Navigate to={ROUTER_PATH_NAMES.HOME} />}
			/>
		</Route>
	</Routes>
);

export default AuthenticatedRoutes;
