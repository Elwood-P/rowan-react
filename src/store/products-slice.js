import { createSlice } from '@reduxjs/toolkit';

import PRODUCTS from '@/data/products';

const productsSlice = createSlice({
  name: 'products',
  initialState: PRODUCTS,
});

// export const productsActions = productsSlice.actions;

export default productsSlice;
