import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "../Slice/cartSlice";
import authSlice from "../Slice/authSlice";
import productsSlice from "../Slice/productsSlice";



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authSlice,
    products: productsSlice,
  },
});
