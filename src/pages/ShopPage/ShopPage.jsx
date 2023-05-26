import { memo } from 'react';

import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import StoreSelector from 'components/StoreSelector/StoreSelector';

const ShopPage = ({ hendleOpenModal }) => {

  return (
    <>
      <Header />
      <Container>
        <StoreSelector />
      </Container>
    </>
  );
};

export default memo(ShopPage);
