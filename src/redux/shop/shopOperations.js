import { createAsyncThunk } from '@reduxjs/toolkit';
import { getListProductsApi, postOrderApi } from 'services/elifApi';

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

export const getListProducts = createAsyncThunk(
  'shop/getListProducts',
  async (_, thunkApi) => {
    try {
      const products = await getListProductsApi();
      return products;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const changeCurrentShop = createAsyncThunk(
  'shop/changeCurrentShop',
  async (shop, thunkApi) => {
    try {
      return shop;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addToCart = createAsyncThunk('shop/addToCart', async (product, thunkApi) => {
  try {
    return product;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const updateProductInCart = createAsyncThunk(
  'shop/updateProductInCart',
  async (data, thunkApi) => {
    try {
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const postOrder = createAsyncThunk('shop/postOrder', async (body, thunkApi) => {
  try {
    const data = postOrderApi(body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
