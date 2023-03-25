export default interface Product {
    id: number;
    name: string;
    description: string;
    images: {main: string, thumb: string}[];
    price: number;
    brand: string;
    discountPercent: number;
}