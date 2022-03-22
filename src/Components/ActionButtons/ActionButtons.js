import React, { useContext } from 'react';
import { ShopContext } from '../../Context/Context';
import './ActionButtons.css';

const ActionButtons = ({id, image, title, price}) => {

  const {
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
    <div className='action-buttons'>
      <button className='action-buttons__button'>
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
      </button>

      <button className='action-buttons__button action-buttons__button_type_cart'>
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
      </button>
    </div>
  );
};

export default ActionButtons;