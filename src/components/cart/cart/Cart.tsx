import { useSelector } from "react-redux"
import { AppState } from "../../../models/AppState"
import { CartItemComponent } from "../cart-item/CartItemComponent";
import './Cart.css';

export const Cart: React.FC = () => {
    const { items } = useSelector((state: AppState) => state.cartState);

    return (
        <>
            {items.length > 0 && items.map(it => <div key={it.productId} className="cart-item-wrapper"><CartItemComponent item={it} /></div>)}
            {!items.length && <div className="empty-cart">Cart is empty...</div>}
        </>
    )
}