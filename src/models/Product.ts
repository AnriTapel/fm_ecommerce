export interface Product {
    id: number;
    name: string;
    description: string;
    images: ProductImage[];
    price: number;
    brand: string;
    discountPercent: number;
}

export interface ProductImage {
    main: string;
    thumb: string;
}