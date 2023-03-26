import './ProductPage.css';
import {Product} from "../../models/Product";
import { ImagesGallery } from "../images-gallery/ImagesGallery";
import { useState } from 'react';

export const ProductPage: React.FC<{product: Product}> = ({product}) => {
    
    const [count, setCount] = useState<number>(0);

    const getProductPrice = (): string => {
        if (product.discountPercent) {
            return `$${Math.floor(product.price * (1 - product.discountPercent / 100))}.00`
        }
        return `$${Math.floor(product.price)}.00`;
    }
    
    const addProductToCart = (): void => {
        
    }

    const incrementCount = (): void => {
        setCount(count + 1);
    }

    const decrementCount = (): void => {
        setCount(count - 1);
    }

    if (!product) return <h1>Loading...</h1>

    return(
        <div className="product-page-container">
            <div className="carrousel-block">
                <ImagesGallery images={product.images}/>
            </div>
            <aside className="product-info-block">
                <span className="product-brand">{product.brand.toUpperCase()}</span>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{getProductPrice()}</p>
                <div className="controls-block">
                    <div className="quantity-control-block">
                        <button disabled={count <= 0} onClick={decrementCount}>
                            <img alt="Minus" src='/images/icon-minus.svg'/>
                        </button>
                        <span>{count}</span>
                        <button onClick={incrementCount}><img alt="Plus" src='/images/icon-plus.svg'/></button>
                    </div>
                    <button onClick={addProductToCart} className="add-to-cart-btn">Add to cart</button>
                </div>
            </aside>
        </div>
    )
}