import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/Context';
import './Cart.css';

const Cart = () => {

    const {cartList, setTitle} = useContext(ShopContext);

    return (
        <div className='cart'>
            { cartList.length === 0 ? null : <span className='cart__counter'>{cartList.length}</span>}
            <Link className='cart__link' to="/cart" onClick={() => setTitle('Cart List')}>
                <i className="large material-icons cart__icon">shopping_cart</i>
                <p className='cart__caption'>Cart</p>
            </Link>
        </div>
    );
};

export default Cart;