import React, { useContext } from 'react';
import { ShopContext } from '../Context/Context';
import CartPageItem from '../Components/CartPageItem';
import './CartPage.css'

const CartPage = () => {

    const {cartList = []} = useContext(ShopContext);

    const handleTotalPrice = () => {
        return cartList.reduce((sum, item) => {
            return sum + item.price * item.quantity
        }, 0)
    }

    return (
        <section className='cart-page'>
            <ul className='cart-page__list'>
                {
                    cartList.length === 0 ? <h3 className='cart-page__empty'>Cart is empty</h3> :
                    cartList.map( item => {
                        return <CartPageItem key={item.id} {...item}/>
                    })
                }
                {
                    cartList.length === 0 ? null :
                    <li className='cart-page__total-price'>
                        Total price: {Math.floor(handleTotalPrice())}  
                    </li>
                }
            </ul>
        </section>
    );
};

export default CartPage;