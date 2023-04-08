import './ProductsList.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../models/AppState";
import { fetchAllProsucts } from "../../services/ProductsService";
import { setProducts } from "../../store/products/products.slice";
import React from "react";
import { ProductCard } from "../../components/product-card/ProductCard";
import { IProduct } from "../../models/Product";

export const ProductsList: React.FC = () => {

    const { products } = useSelector((state: AppState) => state.productsState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products?.length) {
            return;
        }
        fetchAllProsucts()
            .then((res: IProduct[]) => dispatch(setProducts(res)))
            .catch(() => dispatch(setProducts([])))
    }, []);

    return (
        <div className="product-cards-container">
            {
                products && products.map((it: IProduct) => (
                    <ProductCard product={it} key={it.id} />
                ))
            }
        </div>
    )
}