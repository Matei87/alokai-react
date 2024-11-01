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

        <Route path='/' element={<Homepage />} />
        <Route path='/shoppingbag' element={<ShoppingBag />} />
        <Route path='/product/:code' element={<Product />} />
        <Route path='/category' element={<Category />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
