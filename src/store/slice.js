import { createSlice } from '@reduxjs/toolkit';
import data from './data.json';

const initialState = {
  products: data,
  cart: [],
  param: 'all',
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    setParam: (state, action) => {
      state.param = action.payload;
    },
  },
});

export const { addToCart, removeProductFromCart, setParam } = mainSlice.actions;
export default mainSlice.reducer;
