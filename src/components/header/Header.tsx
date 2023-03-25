import './Header.css';
import { useState } from 'react';

export function Header() {

    const [visible, setVisible] = useState(false);

    const toggleCartVisibility = () => {
        setVisible(!visible);
    };

    return(
        <header className="flex_center_align">
            <nav>
                <h2>sneakers</h2>
                <span>Collections</span>
                <span>Men</span>
                <span>Women</span>
                <span>Contacts</span>
            </nav>
            <div className="flex_center_align flex_gap_10">
                <img alt="Cart" className="cart-btn" src='/images/icon-cart.svg' onClick={toggleCartVisibility}/>
                <img alt="User" className="user-btn" src="/images/image-avatar.png"/>
            </div>
        </header>
    );

}