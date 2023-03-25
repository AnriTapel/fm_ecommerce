import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Product from "../../models/Product";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state: Product[], action: PayloadAction<Product>) => {
            state = [...state, action.payload]
        },
        removeItem: (state: Product[], action: PayloadAction<number>) => {
            state.filter(it => it.id !== action.payload);
        } 
    }
})

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;