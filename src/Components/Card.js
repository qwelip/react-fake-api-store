import React, { useContext } from 'react';
import './Card.css';
import { ShopContext } from '../Context/Context';

const Card = ({id, image, title, price, description, rating}) => {

    const {
        setDetailPopup, 
        addToFavorite, 
        favoriteList, 
        removeFromFavorite, 
        addToCart,
        cartList,
        removeFromCart
    } = useContext(ShopContext);

    const handleFavoriteIcon = () => {
        const findId = favoriteList.findIndex( item => item.id === id)
        if (findId >= 0) {
            return true
        }
    }

    const handleCartIcon = () => {
        const findId = cartList.findIndex( item => item.id === id)
        if (findId >= 0) {
            return true
        }
    }

    return (
        <div className='card'>
            <div className="card__actions">
                {
                    handleFavoriteIcon() ?
                        <i className='material-icons card__icon_active'
                            onClick={() => removeFromFavorite(id)}
                        >
                            favorite
                        </i>
                        :
                        <i className='material-icons'
                            onClick={() => addToFavorite({id, image, title})}
                        >
                            favorite_border
                        </i>
                }
                {
                    handleCartIcon() ?
                        <i className="material-icons"
                            onClick={() => removeFromCart(id)}
                        >
                            remove_shopping_cart
                        </i>
                        :
                        <i className="material-icons" 
                            onClick={() => addToCart({id, image, title, price, quantity: 1})}
                        >
                            add_shopping_cart
                        </i>
                }
                
            </div>
            <div className="card__image">
                <img src={image} alt={title} />
            </div>
            <div className="card__description">
                <h2 className='card__title'>{title}</h2>
                <div className="card__footer">
                    <p>Price <strong>{price}</strong></p>
                    <button className='card__button' onClick={ () => {setDetailPopup({image, title, price, description, rating})}}>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;