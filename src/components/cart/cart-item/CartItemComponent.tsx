import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../models/AppState"
import { CartItem } from "../../../models/CartItem"
import { convertPriceToString, getProductResultPrice } from "../../../services/UtilsService";
import { removeItem } from "../../../store/cart/cart.slice";
import './CartItemComponent.css';

export const CartItemComponent: React.FC<{ item: CartItem }> = ({ item }) => {
    const product = useSelector((state: AppState) => state.productsState.products.find(it => it.id === item.productId));
    const dispatch = useDispatch();

    const getItemTotalPriceAsString = (): string => {
        return convertPriceToString(getProductResultPrice(product) * item.quantity);
    }
    
    const deleteItem = () => {
        dispatch(removeItem(item.productId));
    }

    return (
        <>
            {
                product &&
                <div className="cart-item-container">
                    <div className="text-block">
                        <span className="item-name">{product?.name}</span>
                        <span className="item-brand">{product?.brand}</span>
                    </div>
                    <div className="price-and-delete-block">
                        <div className="price-block">
                            <span className="item-quantity">(x{item.quantity})</span>
                            <span className="item-total-price">{getItemTotalPriceAsString()}</span>
                        </div>
                        <div className="delete-item">
                            <img alt="Delete item" src='/images/icon-delete.svg' onClick={deleteItem} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}