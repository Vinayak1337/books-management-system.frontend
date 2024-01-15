import { useEffect } from 'react';
import Router from '../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function App() {
	useEffect(() => {
		// To wake up the server
		axios(import.meta.env.VITE_API_URL);
	}, []);

	return (
		<>
			<Router />
			<ToastContainer position='bottom-right' containerId='app-toast' />
		</>
	);
}

export default App;
