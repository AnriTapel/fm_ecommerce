import './ProductCard.css';
import { convertPriceToString, getProductResultPrice } from '../../services/UtilsService';
import { IProduct } from '../../models/Product';
import { Link } from 'react-router-dom';

export const ProductCard: React.FC<{ product: IProduct }> = ({ product }) => {

    const getProductPrice = (): string => {
        return convertPriceToString(getProductResultPrice(product));
    }

    if (!product) return <h1>Loading...</h1>

    return (
        <div className="product-card-container">
            <img className="product-card-main-img" alt={product.name} src={product.images[0].main} />
            <span className="product-card-brand">{product.brand.toUpperCase()}</span>
            <span className="product-card-name">{product.name}</span>
            <span className="product-card-price">{getProductPrice()}</span>
            <button className="product-card-details-btn">
                <Link to={`/product/${product.id}`}>
                    Details
                </Link>
            </button>
        </div>
    )
}