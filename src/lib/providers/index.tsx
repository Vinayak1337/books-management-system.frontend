import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Store, { persistor } from '../redux/Store';

const Providers: FC<PropsWithChildren> = ({ children }) => (
	<Provider store={Store}>
		<PersistGate persistor={persistor}>
			<BrowserRouter>{children}</BrowserRouter>
		</PersistGate>
	</Provider>
);

export default Providers;
