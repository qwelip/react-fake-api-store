import React, { useContext } from 'react';
import { ShopContext } from '../../Context/Context';
import FavoriteListItem from '../FavoriteListItem/FavoriteListItem';
import './FavoriteList.css'

const FavoriteList = ({setShowFavoriteList}) => {

    const {favoriteList, removeFromFavorite} = useContext(ShopContext);

    return (
        <>
            <div className="favorite-list__bg" onClick={(e) => {e.stopPropagation(); setShowFavoriteList(false)}}></div>
            <div className='favorite-list'>
                <i 
                    className="material-icons favorite-list__close"
                    onClick={(e) => {e.stopPropagation(); setShowFavoriteList(false)}}
                >
                    close
                </i>
                <h3 className='favorite-list__title'>Favorite list</h3>
                <ul className='favorite-list__list'>
                    {
                        favoriteList.length === 0 ? <li className='favorite-list__empty'>List is empty</li> :
                        favoriteList.map( item => {
                            return <FavoriteListItem key={item.id} removeFromFavorite={removeFromFavorite} {...item}/>
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default FavoriteList;