import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [
      {
        id: 'pId-2',
        name: 'Felted Wool Jumper',
        description:
          'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor.',
        imageUrl: 'https://kimba.imgix.net/wp-content/uploads/2021/09/shirt-stars.jpg',
        category: 'knitwear',
        material: 'ethically sourced wool',
        price: 70,
        sale: false,
        salePrice: null,
        size: 'sm',
        qty: 1,
      },
    ],
  },
  reducers: {
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

    updateItemQty: (state, action) => {
      const cartItems = state.items;
      const cartItemToUpdate = action.payload;
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToUpdate.id && cartItem.size === cartItemToUpdate.size);

      return {
        ...state,
        items: cartItems.map((cartItem) => (cartItem.id === cartItemToUpdate.id ? { ...cartItem, qty: cartItemToUpdate.qty } : cartItem)),
      };
    },

    removeItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter((cartItem) => cartItem.id !== action.payload.id),
      };
    },
  },
});

export const { addItem, updateItemQty, removeItem } = cartSlice.actions;

export default cartSlice;
