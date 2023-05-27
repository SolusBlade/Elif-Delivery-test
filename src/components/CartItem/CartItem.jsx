import { useDispatch } from 'react-redux';
import s from './CartItem.module.scss';
import { updateProductInCart } from 'redux/shop/shopOperations';

const CartItem = ({ price, name, img, id, count }) => {
    const dispatch = useDispatch();

    const hendleCountChange = e => {
      const type = e.target.id
    dispatch(updateProductInCart({ id, type }));
  };

  return (
    <li className={s.item}>
      <div className={s.imgWrap}>
        <img src={img} alt={`${name} img`} className={s.itemImg} height="300" />
      </div>
      <div className={s.box}>
        <span className={s.textWrap}>
          <p className={s.textName}>{name}</p>
          <p className={s.textPrice}>Price: {price * count} $</p>
        </span>
        <div className={s.input}>
          <button id="decrement" type="button" onClick={hendleCountChange}>
            -
          </button>
          <p>{count}</p>
          <button id="increment" type="button" onClick={hendleCountChange}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
