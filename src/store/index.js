import { configureStore, createSlice } from "@reduxjs/toolkit";

import productsSlice from "@/store/products-slice";
import cartSlice from "@/store/cart-slice";

const store = configureStore({
  reducer: { products: productsSlice.reducer, cart: cartSlice.reducer },
});

export default store;