import { CartItem } from "./CartItem";
import { IProduct } from "./Product";

export interface AppState {
    cartState: CartState;
    productsState: ProductsState;
}

export interface ProductsState {
    products: IProduct[]
}

export interface CartState {
    items: CartItem[]
}