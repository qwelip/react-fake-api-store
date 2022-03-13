import React, { useContext } from 'react';
import './Favorite.css';
import { ShopContext } from '../Context/Context';
import FavoriteList from './FavoriteList';
import { useState } from 'react';

const Favorite = () => {

    const {favoriteList = []} = useContext(ShopContext);
    const [showFavoriteList, setShowFavoriteList] = useState(false);

    return (
        <div className='favorite'
            onClick={() => setShowFavoriteList(true)}
        >
            {showFavoriteList && <FavoriteList setShowFavoriteList={setShowFavoriteList}/>}
            {favoriteList.length === 0 ? null : <span className='favorite__counter'>{favoriteList.length}</span>}
            <i 
                className="large material-icons favorite__icon" 
            >
                favorite
            </i>
            <p className='favorite__caption'>Favorite</p>
        </div>
    );
};

export default Favorite;