import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './index.scss';
import Providers from './lib/providers/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>
);
