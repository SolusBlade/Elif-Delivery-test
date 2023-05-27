import { useDispatch, useSelector } from 'react-redux';
import s from './CartForm.module.scss';
import { selectCart, selectTotalPrice } from 'redux/shop/shopSelectors';
import { postOrder } from 'redux/shop/shopOperations';
import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const CartForm = () => {
    const [fields, setFields] = useState(initialState);
    const cart = useSelector(selectCart);

  const total = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prevFields => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postOrder({ ...fields, cart}));
    setFields(initialState);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <p className={s.title}>Order </p>
      <p className={s.message}>Fill in all fields and we will contact you</p>
      <label>
        <input
          required
          placeholder=""
          type="text"
          className={s.input}
          name="name"
          value={fields.name}
          onChange={handleChange}
        />
        <span>Name</span>
      </label>
      <label>
        <input
          required
          placeholder=""
          type="text"
          className={s.input}
          name="email"
          value={fields.email}
          onChange={handleChange}
        />
        <span>Email</span>
      </label>
      <label>
        <input
          required
          placeholder=""
          type="text"
          className={s.input}
          name="phone"
          value={fields.phone}
          onChange={handleChange}
        />
        <span>Phone</span>
      </label>
      <label>
        <input
          required
          placeholder=""
          type="text"
          className={s.input}
          name="address"
          value={fields.address}
          onChange={handleChange}
        />
        <span>Address</span>
      </label>
      <div className={s.total}>
        <p>Total price: {total}$</p>
        <button type="submit" className={s.submit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default CartForm;
