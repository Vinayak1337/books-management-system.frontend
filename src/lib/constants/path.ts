export enum ROUTER_PATH_NAMES
{
	HOME = '/',
	LOGIN = '/login',
	REGISTER = '/register',
	MY_BOOKS = '/my-books',
	BOOKS = '/books',
	PUBLISH_BOOK = '/publish-book',
	SEARCH_BOOKS = '/search-books',
	LOGOUT = '/logout',
	NOT_FOUND = '*'
}

export enum NAVIGATOR_ROUTES {
	AUTHENTICATED_ROUTES = 'authenticated-routes',
	UNAUTHENTICATED_ROUTES = 'unauthenticated-routes'
}

export enum API_PATH_NAMES {
	LOGIN = '/auth/login',
	REGISTER = '/auth/register',
	SEARCH_BOOKS = '/books/search',
	UNPUBLISH_BOOK = '/books/unpublish/',
	PUBLISH_BOOK = '/books/publish',
	MY_BOOKS = '/books/user',
	BOOKS = '/books/published'
}
