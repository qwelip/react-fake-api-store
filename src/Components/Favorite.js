import React, { useContext, useState } from 'react';
import './Favorite.css';
import { ShopContext } from '../Context/Context';
import FavoriteList from './FavoriteList';

const Favorite = () => {

    const favoriteStyle = ['favorite-list']

    const [favoriteListClass, setFavoriteListClass] = useState(favoriteStyle)
    const {favoriteList = []} = useContext(ShopContext);
    

    return (
        <div className='favorite'
            onClick={(e) => {

                if (!e.target.classList.contains('favorite__icon') && 
                    !e.target.classList.contains('favorite__caption')) {return}

                if (favoriteListClass.length === 1) {
                    setFavoriteListClass([...favoriteListClass, 'favorite-list_visible'])
                } else {
                    setFavoriteListClass(favoriteStyle)
                }
            }}
        >
            <FavoriteList 
                favoriteListClass={favoriteListClass} 
                setFavoriteListClass={setFavoriteListClass} 
                favoriteStyle={favoriteStyle}
            />
            { favoriteList.length === 0 ? null : <span className='favorite__counter'>{favoriteList.length}</span>}
            <i 
                className="large material-icons favorite__icon" 
            >
                favorite
            </i>
            <p className='favorite__caption'>Favoritte</p>
        </div>
    );
};

export default Favorite;