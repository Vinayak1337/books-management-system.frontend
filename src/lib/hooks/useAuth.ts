import { useEffect, useState } from 'react';

const key = 'BOOK_STORE_AUTH_TOKEN';

export function useIsAuthenticated() {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const listener = (e: StorageEvent) => {
			if (e.key === key) setToken(e.newValue);
		};

		window.addEventListener('storage', listener);

		return () => window.removeEventListener('storage', listener);
	}, []);

	return !!token;
}

export function setAuthToken(token: string) {
	localStorage.setItem(key, token);
}

export function getAuthToken() {
	return localStorage.getItem(key);
}

export function removeAuthToken() {
	localStorage.removeItem(key);
}
