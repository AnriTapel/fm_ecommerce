import { Product } from "../models/Product";

export const getProductResultPrice = (product: Product | undefined): number => {
    if (!product) {
        return 0;
    }
    if (product.discountPercent) {
        return Math.floor(product.price * (1 - product.discountPercent / 100));
    }
    return Math.floor(product.price);
}


export const convertPriceToString = (price: number): string => {
    return `$${Math.floor(price)}.00`;
}