import { createAsyncThunk } from '@reduxjs/toolkit';

// export const registerUser = createAsyncThunk(
//   'auth/register',
//   async (newUser, thunkApi) => {
//     const { name, email, password } = newUser;
//     try {
//       await registerApi({ name, email, password });
//       const userToken = await loginApi({ email, password });
//       token.set(userToken);
//       return { newUser, ...userToken };
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const changeCurrentShop = createAsyncThunk(
  'shop/changeCurrentShop',
  async (shop, thunkApi) => {
    try {
      //   const userToken = await loginApi({ email, password });
      return shop;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
