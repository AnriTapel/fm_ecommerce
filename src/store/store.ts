import { Store, configureStore } from "@reduxjs/toolkit";
import { AppState } from "../models/AppState";
import cartReducer from './cart/cart.slice';
import productsReducer from './products/products.slice';

export const store: Store<AppState> = configureStore({
    reducer: {
        cartState: cartReducer,
        productsState: productsReducer
    }
})