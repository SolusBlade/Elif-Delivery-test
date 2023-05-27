import { useDispatch } from 'react-redux';
import s from './CartBtn.module.scss';
import cart from '../../assets/icons/cart.svg';
import trash from '../../assets/icons/trash.svg';
import { addToCart } from 'redux/shop/shopOperations';

const CartBtn = ({ item, action, text }) => {
  const dispatch = useDispatch();

  const hendleCartClick = () => {
    switch (action) {
      case 'add':
        dispatch(addToCart(item));
        break;
      case 'remove':
        // dispatch(removeFromCart(id));
        break;

      default:
        break;
    }
  };

  return (
    <div className={s.button} onClick={hendleCartClick}>
      <div className={s.buttonWrapper}>
        <div className={s.text}>{text}</div>
        <span className={s.icon}>
          {action === 'add' && <img src={cart} alt="cart svg" />}
          {action === 'remove' && <img src={trash} alt="trash svg" />}
        </span>
      </div>
    </div>
  );
};

export default CartBtn;
