import { configureStore } from '@reduxjs/toolkit';
import useReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

// Define your user reducer
const store = configureStore({
  reducer: {
    user: useReducer,
    cart: cartReducer,
  },
});

export default store;
