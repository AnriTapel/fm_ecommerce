export interface IProduct {
    id: number;
    name: string;
    description: string;
    images: IProductImage[];
    price: number;
    brand: string;
    discountPercent: number;
}

export interface IProductImage {
    main: string;
    thumb: string;
}