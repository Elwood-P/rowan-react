import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // addItem
    addItem: (state, action) => {
      const cartItems = state.items;
      const cartItemToAdd = action.payload;

      const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size);

      if (existingCartItem) {
        return {
          ...state,
          items: cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, qty: cartItem.qty + cartItemToAdd.qty } : cartItem
          ),
        };
      }

      return { ...state, items: [...cartItems, { ...cartItemToAdd }] };
    },
    // removeItem
    // removeAllSameItems
    // clearCart
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice;
