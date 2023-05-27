import CartBtn from 'components/CartBtn/CartBtn';
import s from './ProductItem.module.scss';

const ProductItem = ({ price, name, img, id, shopName }) => {
  return (
    <li className={s.item}>
      <div className={s.imgWrap}>
        <img src={img} alt={`${name} img`} className={s.itemImg} height="300" />
      </div>
      <div className={s.box}>
        <span className={s.textWrap}>
          <p>{name}</p>
          <p className={s.textPrice}>Price: {price} $</p>
        </span>
        <CartBtn
          item={{ id, shopName, price, name, img }}
          action={'add'}
          text={'Add to cart'}
        />
      </div>
    </li>
  );
};

export default ProductItem;
