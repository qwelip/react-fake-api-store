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
            <p className='cart-page-item__title'>{title}</p>
            <div className="cart-page-item__column">
                <div className="cart-page-item__counter">
                    <i className="material-icons cart-page-item__icon" onClick={() => removeQuantity(id)}>indeterminate_check_box</i>
                    <p className='cart-page-item__items'>{quantity}</p>
                    <i className="material-icons cart-page-item__icon" onClick={() => addQuantity(id)}>add_box</i>
                </div>
            </div>
            <div className="cart-page-item__column cart-page-item__column_price">
                <p className='cart-page-item__price'>Price:</p>
                <span>{Math.floor(quantity * price)}</span>
            </div>
            <i className="material-icons cart-page-item__trash-icon" onClick={() => removeFromCart(id)}>delete</i>
        </li>
    );
};

export default CartPageItem;