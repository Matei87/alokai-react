import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/index';
import ShoppingBag from './pages/shoppingbag/index';
import Product from './pages/product/index';
import Category from './pages/category/index';
import Checkout from './pages/checkout/index';

import NotFound from './pages/not-found/index';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound />} />

        <Route path='/alokai-react/' element={<Homepage />} />
        <Route path='/alokai-react/shoppingbag' element={<ShoppingBag />} />
        <Route path='/alokai-react/product/:code' element={<Product />} />
        <Route path='/alokai-react/category' element={<Category />} />
        <Route path='/alokai-react/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
