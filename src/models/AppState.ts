import { CartItem } from "./CartItem";
import { Product } from "./Product";

export interface AppState {
    cartState: CartState;
    productsState: ProductsState;
}

export interface ProductsState {
    products: Product[]
}

export interface CartState {
    items: CartItem[]
}