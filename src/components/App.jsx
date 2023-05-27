import {  Navigate, Route, Routes } from 'react-router-dom';
import { useEffect} from 'react';

import ShopPage from 'pages/ShopPage/ShopPage';
import { useDispatch } from 'react-redux';
import { getListProducts } from 'redux/shop/shopOperations';
import CartPage from 'pages/CartPage/CartPage';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProducts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/shop"
          element={<ShopPage />}
        />
        <Route
          path="/cart"
          element={<CartPage />}
        />
        <Route path="*" element={<Navigate to="/shop" />} />
      </Routes>
    </>
  );
};

export default App;
