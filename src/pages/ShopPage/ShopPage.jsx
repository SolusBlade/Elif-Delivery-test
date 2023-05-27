import { memo } from 'react';

import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import StoreSelector from 'components/StoreSelector/StoreSelector';
import ProductsList from 'components/ProductsList/ProductsList';

const ShopPage = ( ) => {

  return (
    <>
      <Header />
      <Container>
        <StoreSelector />
        <ProductsList />
      </Container>
    </>
  );
};

export default memo(ShopPage);
