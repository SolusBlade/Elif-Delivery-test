import { createSlice } from '@reduxjs/toolkit';
import {
  addToCart,
  changeCurrentShop,
  getListProducts,
  postOrder,
  updateProductInCart,
} from './shopOperations';

const initialState = {
  cart: [],
  currentShop: null,
  products: [],
};

const shopSlice = createSlice({
  name: 'shop',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(changeCurrentShop.fulfilled, (state, { payload }) => {
        state.currentShop = payload;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        const existingItem = state.cart.find(item => item.id === payload.id);
        existingItem
          ? (existingItem.count += 1)
          : state.cart.push({ ...payload, count: 1 });
      })
      .addCase(updateProductInCart.fulfilled, (state, { payload }) => {
        const { id, type } = payload;
        const existingItem = state.cart.find(item => item.id === id);

        existingItem.count =
          type === 'increment'
            ? existingItem.count + 1
            : existingItem.count - 1;

        if (type === 'decrement' && existingItem.count === 0) {
          state.cart = state.cart.filter(item => item.id !== id);
        }
      })
      .addCase(getListProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
      })
      .addCase(postOrder.fulfilled, (state, _) => {
        state.cart = [];
      });
  },
});

export default shopSlice.reducer;
