import { createSelector } from '@reduxjs/toolkit';

export const selectCurrentShop = state => state.shop.currentShop;
export const selectAllProducts = state => state.shop.products;
export const selectCart = state => state.shop.cart;

export const selectTotalPrice = createSelector([selectCart], cart => {
  const totalSpend = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.count,
    0
  );
  return totalSpend;
});
