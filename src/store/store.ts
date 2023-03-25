import { Store, configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cart.slice';

export const store: Store = configureStore({
    reducer: {
        cart: cartReducer
    }
})