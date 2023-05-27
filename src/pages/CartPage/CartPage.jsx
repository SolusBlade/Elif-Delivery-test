import { memo } from 'react';

import s from './CartPage.module.scss';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import CartList from 'components/CartList/CartList';
import CartForm from 'components/CartForm/CartForm';

const CartPage = () => {
  return (
    <>
      <Header />
      <Container className={s.cartContainer}>
        <CartForm />
        <CartList />
      </Container>
    </>
  );
};

export default memo(CartPage);
