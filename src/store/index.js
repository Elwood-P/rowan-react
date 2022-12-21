import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import productsSlice from '@/store/products-slice';
import cartSlice, { addItem, updateItemQty, removeItem, LOCAL_STORAGE_KEY } from '@/store/cart-slice';

const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(addItem, updateItemQty, removeItem),
  effect: (action, listenerApi) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(listenerApi.getState().cart.items)),
});

const store = configureStore({
  reducer: { products: productsSlice.reducer, cart: cartSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});

export default store;
