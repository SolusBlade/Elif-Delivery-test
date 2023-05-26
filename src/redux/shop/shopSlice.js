import { createSlice } from '@reduxjs/toolkit';
import { changeCurrentShop } from './shopOperations';

const initialState = {
  cart: [],
    currentShop: {
        name: 'value-mc',
        products: [],
  },
};

const shopSlice = createSlice({
  name: 'shop',

  initialState,

  extraReducers: builder => {
    builder
      //   .addCase(registerUser.fulfilled, (state, { payload }) => {
      //     fulfilledOperation(state);
      //     state.token = payload.token;
      //     state.user.name = payload.newUser.name;
      //     state.user.email = payload.newUser.email;
      //     state.isLoading = false;
      //   })
      .addCase(changeCurrentShop.fulfilled, (state, { payload }) => {
        state.currentShop.name = payload;
      })
  },
});

export default shopSlice.reducer;
