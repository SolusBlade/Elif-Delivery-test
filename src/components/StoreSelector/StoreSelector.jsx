import { useEffect } from 'react';
import s from './StoreSelector.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentShop } from 'redux/shop/shopOperations';
import { selectCart, selectCurrentShop } from 'redux/shop/shopSelectors';

const StoreSelector = () => {
  const dispatch = useDispatch();
  const currentShop = useSelector(selectCurrentShop);
  const cart = useSelector(selectCart);

  useEffect(() => {
    if (cart.length > 0) {
      dispatch(changeCurrentShop(cart[0].shopName));
    }
  }, [cart, currentShop, dispatch]);

  const handleShopChange = event => {
    const selectedShop = event.target.value;

    switch (selectedShop) {
      case 'mc':
        dispatch(changeCurrentShop('mc'));
        break;
      case 'kfc':
        dispatch(changeCurrentShop('kfc'));
        break;
      case 'ph':
        dispatch(changeCurrentShop('ph'));
        break;
      case 'str':
        dispatch(changeCurrentShop('str'));
        break;
      default:
        dispatch(changeCurrentShop('mc'));
        break;
    }
  };

  const isDisabled = (name) => {
    return Boolean(cart.length > 0 && currentShop !== name)
  }

  return (
    <div className={s.radioInput}>
      <label>
        <input
          type="radio"
          id="value-mc"
          name="value-radio"
          checked={currentShop === 'mc'}
          disabled={isDisabled('mc')}
          value="mc"
          onChange={handleShopChange}
        />
        <span>McDonald's</span>
      </label>
      <label>
        <input
          type="radio"
          id="value-kfc"
          name="value-radio"
          checked={currentShop === 'kfc'}
          disabled={isDisabled('kfc')}
          value="kfc"
          onChange={handleShopChange}
        />
        <span>KFC</span>
      </label>
      <label>
        <input
          type="radio"
          id="value-ph"
          name="value-radio"
          checked={currentShop === 'ph'}
          disabled={isDisabled('ph')}
          value="ph"
          onChange={handleShopChange}
        />
        <span>Puzata Hata</span>
      </label>
      <label>
        <input
          type="radio"
          id="value-str"
          name="value-radio"
          checked={currentShop === 'str'}
          disabled={isDisabled('str')}
          value="str"
          onChange={handleShopChange}
        />
        <span>Salateira</span>
      </label>
      <span className={s.selection}></span>
    </div>
  );
};

export default StoreSelector;
