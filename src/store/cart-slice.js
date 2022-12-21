import { createSlice } from '@reduxjs/toolkit';

export const LOCAL_STORAGE_KEY = 'rowanReact.cartItems';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isMiniCartOpen: false,
    items: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [],
  },
  reducers: {
    closeMiniCart: (state) => {
      state.isMiniCartOpen = false;
    },
    openMiniCart: (state) => {
      state.isMiniCartOpen = true;
    },

    addItem: (state, action) => {
      const cartItems = state.items;
      const cartItemToAdd = action.payload;
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size);

      if (existingCartItem) {
        return {
          ...state,
          isMiniCartOpen: true,
          items: cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id && cartItem.size === cartItemToAdd.size
              ? { ...cartItem, qty: cartItem.qty + cartItemToAdd.qty }
              : cartItem
          ),
        };
      }

      return { ...state, isMiniCartOpen: true, items: [...cartItems, { ...cartItemToAdd }] };
    },

    updateItemQty: (state, action) => {
      const cartItems = state.items;
      const cartItemToUpdate = action.payload;

      return {
        ...state,
        items: cartItems.map((cartItem) =>
          cartItem.id === cartItemToUpdate.id && cartItem.size === cartItemToUpdate.size
            ? { ...cartItem, qty: cartItemToUpdate.qty }
            : cartItem
        ),
      };
    },

    removeItem: (state, action) => {
      const cartItems = state.items;
      const cartItemToRemove = action.payload;

      return {
        ...state,
        items: cartItems.filter((cartItem) => !(cartItem.id === cartItemToRemove.id && cartItem.size === cartItemToRemove.size)),
      };
    },
  },
});

export const { addItem, updateItemQty, removeItem, openMiniCart, closeMiniCart } = cartSlice.actions;

export default cartSlice;
