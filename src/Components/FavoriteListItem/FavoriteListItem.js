import React from 'react';
import './FavoriteListItem.css';

const FavoriteListItem = ({id, image, title, removeFromFavorite}) => {

    return (
        <li className='favorite-list-item'>
            <div className="favorite-list-item__img">
                <img src={image} alt={title} />
            </div>
            <h3 className='favorite-list-item__title'>{title}</h3>
            <i 
                className="material-icons favorite-list-item__delete-icon" 
                onClick={() => removeFromFavorite(id)}
            >close
            </i>
        </li>
    );
};

export default FavoriteListItem;