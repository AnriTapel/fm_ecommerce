import { Product } from "./Product";

export interface AppState {
    cartState: any;
    productsState: ProductsState;
}

export interface ProductsState {
    products: Product[]
}