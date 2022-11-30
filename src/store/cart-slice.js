import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isMiniCartOpen: false,
    items: [
      {
        id: 'aztec-autumn-wool-jumper',
        name: 'Aztec Autumn Wool Jumper',
        description:
          'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum.',
        imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/08/jumper-zigzag.jpg',
        category: 'tops & t-shirts',
        material: 'ethically sourced wool',
        price: 90,
        sale: 'on sale',
        salePrice: 70,
        size: '2xl',
        qty: 3,
      },
      {
        id: 'grey-ribbed-funnel-neck-jumper',
        name: 'Grey Ribbed Funnel Neck Jumper',
        description: 'Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.',
        imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/jumper-grey.jpg',
        category: 'knitwear',
        material: 'ethically sourced wool',
        price: 80,
        sale: false,
        salePrice: null,
        size: 'md',
        related: [
          'rust-wool-jumper',
          'felted-wool-jumper',
          'felted-wool-jumper',
          'oversized-fennel-jumper'
        ],
        qty: 1
      }
    ],
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
