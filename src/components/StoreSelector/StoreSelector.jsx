import s from './StoreSelector.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentShop } from 'redux/shop/shopOperations';
import { selectCurrentShop } from 'redux/shop/shopSelectors';

const StoreSelector = () => {
  const dispatch = useDispatch();
  const currentShop = useSelector(selectCurrentShop);

  const handleShopChange = event => {
    const selectedShop = event.target.value;

    switch (selectedShop) {
      case 'value-mc':
        dispatch(changeCurrentShop('value-mc'));
        break;
      case 'value-kfc':
        dispatch(changeCurrentShop('value-kfc'));
        break;
      case 'value-ph':
        dispatch(changeCurrentShop('value-ph'));
        break;
      case 'value-str':
        dispatch(changeCurrentShop('value-str'));
        break;
      default:
        dispatch(changeCurrentShop('value-mc'));
        break;
    }
  };

  return (
    <div className={s.radioInput}>
      <label>
        <input
          type="radio"
          id="value-mc"
          name="value-radio"
          checked={currentShop === 'value-mc'}
          value="value-mc"
          onChange={handleShopChange}
        />
        <span>McDonald's</span>
      </label>
      <label>
        <input
          type="radio"
          id="value-kfc"
          name="value-radio"
          checked={currentShop === 'value-kfc'}
          value="value-kfc"
          onChange={handleShopChange}
        />
        <span>KFC</span>
      </label>
      <label>
        <input
          type="radio"
          id="value-ph"
          name="value-radio"
          checked={currentShop === 'value-ph'}
          value="value-ph"
          onChange={handleShopChange}
        />
        <span>Puzata Hata</span>
      </label>
      <label>
        <input
          type="radio"
          id="value-str"
          name="value-radio"
          checked={currentShop === 'value-str'}
          value="value-str"
          onChange={handleShopChange}
        />
        <span>Salateira</span>
      </label>
      <span className={s.selection}></span>
    </div>
  );
};

export default StoreSelector;
