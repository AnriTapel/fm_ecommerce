import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../models/AppState";
import { CartItem } from "../../models/CartItem";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state: CartState, action: PayloadAction<CartItem>) => {
            let existingItemIndex = state.items.findIndex(it => it.productId === action.payload.productId);
            if (existingItemIndex > -1) {
                const updateItem = state.items[existingItemIndex];
                updateItem.quantity += action.payload.quantity;
                state.items = [
                    ...state.items.slice(0, existingItemIndex),
                    updateItem,
                    ...state.items.slice(existingItemIndex + 1)
                ];
            } else {
                state.items = [...state.items, action.payload]
            }
            console.log(state.items);
        },
        removeItem: (state: CartState, action: PayloadAction<number>) => {
            state.items = state.items.filter(it => it.productId !== action.payload);
        } 
    }
})

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;