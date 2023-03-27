import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "../../models/AppState";
import { Product } from "../../models/Product";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        setProducts: (state: ProductsState, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        addProduct: (state: ProductsState, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        removeProduct: (state: ProductsState, actoion: PayloadAction<number>) => {
            state.products = state.products.filter(it => it.id !== actoion.payload);
        }
    }
})

export const { setProducts, addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;