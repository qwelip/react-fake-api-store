import React, { useContext } from 'react';
import { ShopContext } from '../Context/Context';
import './CartPageItem.css';

const CartPageItem = ({id, title, image, price, quantity}) => {

    const {removeFromCart, addQuantity, removeQuantity} = useContext(ShopContext)

    return (
        <li className='cart-page-item'>
            <div className="cart-page-item__img">
                 <img src={image} alt={title} />
            </div>
            <div className="cart-page-item__column">
                <h3 className='cart-page-item__title'>{title}</h3>
                
                <div className="cart-page-item__counter">
                    <i className="material-icons cart-page-item__icon" onClick={() => removeQuantity(id)}>remove_circle</i>
                    <p className='cart-page-item__items'>{quantity}</p>
                    <i className="material-icons cart-page-item__icon" onClick={() => addQuantity(id)}>add_circle</i>
                </div>
                <div className="cart-page-item__price-section">
                    <p className='cart-page-item__price'>Price:</p>
                    <span>${Math.floor(quantity * price)}</span>
                </div>
            </div>
            <i className="material-icons cart-page-item__trash-icon" onClick={() => removeFromCart(id)}>cancel</i>
        </li>
    );
};

export default CartPageItem;