import Footer from './components/Footer';
import ReduxProvider from './store/reduxProvider.jsx';

export default function Layout({ children }) {
  return (
    <ReduxProvider>
      {children}
      <Footer />
    </ReduxProvider>
  );
}
