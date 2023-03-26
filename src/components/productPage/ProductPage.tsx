import './ProductPage.css';
import {Product} from "../../models/Product";
import { ImagesGallery } from "../images-gallery/ImagesGallery";

export const ProductPage: React.FC<{product: Product}> = ({product}) => {
    const getProductPrice = (): string => {
        if (product.discountPercent) {
            return `$${Math.floor(product.price * product.discountPercent / 100)}.00`
        }
        return `$${Math.floor(product.price)}.00`;
    }
    
    return(
        <div className="product-page-container">
            <div className="carrousel-block">
                <ImagesGallery images={product.images}/>
            </div>
            <div className="product-info-block">
                <span className="product-brand">{product.brand.toUpperCase()}</span>
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{getProductPrice()}</p>
            </div>
        </div>
    )
}