import { createSlice } from '@reduxjs/toolkit';

import DUMMY_PRODUCTS from '@/data/data';

const productsSlice = createSlice({
  name: 'products',
  initialState: DUMMY_PRODUCTS,
});

// export const productsActions = productsSlice.actions;

export default productsSlice;
