import { useSelector } from 'react-redux';
import { selectCart } from 'redux/shop/shopSelectors';
import s from './CartList.module.scss';
import CartItem from 'components/CartItem/CartItem';

const CartList = () => {
  const cart = useSelector(selectCart);

  return (
    <ul className={s.list}>
      {cart.map(({ id, price, name, img, shopName, count }) => (
        <CartItem
          key={id}
          id={id}
          price={price}
          name={name}
          img={img}
          shopName={shopName}
          count={count}
        />
      ))}
    </ul>
  );
};

export default CartList;
