import store, { persistor } from './store';
import { Provider } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import NavbarCheckout from '../components/NavbarCheckout';
import Footer from '../components/Footer';
import { PersistGate } from 'redux-persist/integration/react';

const ReduxProvider = ({ children }) => {
  const { pathname } = useLocation();
  const navbar =
    pathname === '/checkout' || pathname === '/shoppingbag' ? (
      <NavbarCheckout />
    ) : (
      <NavBar />
    );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {navbar}
        {children}
        <Footer />
      </PersistGate>
    </Provider>
  );
};
export default ReduxProvider;
