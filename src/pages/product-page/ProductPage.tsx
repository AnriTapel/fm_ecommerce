import './ProductPage.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cart/cart.slice';
import { convertPriceToString, getProductResultPrice } from '../../services/UtilsService';
import { ImagesGallery } from '../../components/images-gallery/ImagesGallery';
import { AppState } from '../../models/AppState';
import { useNavigate, useParams } from 'react-router-dom';

export const ProductPage: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const [count, setCount] = useState<number>(1);
    const dispatch = useDispatch();

    const product = useSelector((state: AppState) => state.productsState.products.find(it => it.id === parseInt((params?.id ?? '0'))))
    
    useEffect(() => {
        if (!product) {
            console.log('No product with such id');
            navigate('/');
        }
    }, []);

    const getProductPrice = (): string => {
        return convertPriceToString(getProductResultPrice(product));
    }
    
    const addProductToCart = (): void => {
        if (count < 1) {
            return;
        }
        dispatch(addItem({productId: product!.id, quantity: count}));
        setCount(1);
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