/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';

export default function promiseToast({
	id,
	message,
	status = 'pending'
}: {
	id: string;
	message: string;
	status?: 'pending' | 'success' | 'error';
}) {
	const promise = new Promise((resolve, reject) => {
		switch (status) {
			case 'pending':
				break;

			case 'success':
				resolve(null);
				break;

			case 'error':
				reject(null);
				break;
		}
	});

	toast.promise(
		promise,
		{
			pending: message,
			success: message,
			error: message
		},
		{
			toastId: id,
			autoClose: status === 'success' ? 1 : 0
		}
	);
}

export function serializeError(
	error: any,
	missingProperty: string,
	fallback: string
) {
	let msg = '';

	if (error?.response?.data) {
		if (error.response.data.code === '11000')
			msg = missingProperty + ' already exists!';
		else if (error.response.data.status === 401)
			msg = 'Session expired! Please logout & login again.';
		else msg = error.response.data.message;
	} else msg = error?.message || `Error ${fallback}...`;

	return msg;
}
