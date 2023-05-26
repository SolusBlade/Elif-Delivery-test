import {  Navigate, Route, Routes } from 'react-router-dom';
import {  useCallback, useEffect, useState } from 'react';



// import MovieModal from './MovieModal/MovieModal';
import ShopPage from 'pages/ShopPage/ShopPage';


const App = () => {
  const [modalData, setModalData] = useState(null);

  const hendleOpenModal = useCallback(id => {
    
  }, []);

  const hendleCloseModal = () => {
    setModalData(null);
  };

  return (
    <>
      <Routes>
        <Route
          path="/shop"
          element={<ShopPage hendleOpenModal={hendleOpenModal} />}
        />
        <Route
          path="/cart"
          // element={<CartPage hendleOpenModal={hendleOpenModal} />}
        />
        <Route path="*" element={<Navigate to="/shop" />} />
      </Routes>
      {/* {modalData && (
        <MovieModal modalData={modalData} closeModal={hendleCloseModal} />
      )} */}
    </>
  );
};

export default App;
