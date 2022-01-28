import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { ShopContext } from '../Context/Context';
import FavoriteListItem from './FavoriteListItem';
import './FavoriteList.css'

const FavoriteList = ({favoriteListClass, setFavoriteListClass, favoriteStyle}) => {

    const {favoriteList, removeFromFavorite} = useContext(ShopContext);

    return (
        <div className={favoriteListClass.join(' ')}>
            <i 
                className="material-icons favorite-list__close"
                onClick={() => setFavoriteListClass(favoriteStyle)}
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
    );
};

export default FavoriteList;