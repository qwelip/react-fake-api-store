import React, { useContext } from 'react';
import './Card.css';
import { ShopContext } from '../Context/Context';
import ActionButtons from './ActionButtons';

const Card = ({id, image, title, price, description, rating}) => {

    const {
        setDetailPopup
    } = useContext(ShopContext);

    return (
        <div className='card'>
            <ActionButtons id={id} image={image} title={title} price={price}/>
            <div className="card__image">
                <img src={image} alt={title} />
            </div>
            <div className="card__description">
                <h2 className='card__title'>{title}</h2>
                <div className="card__footer">
                    <p className='card__price'>Price <strong>${price}</strong></p>
                    <button 
                        className='card__button' 
                        onClick={ () => {
                            setDetailPopup({
                                id,
                                image, 
                                title, 
                                price, 
                                description,
                                rating
                            })
                        }}
                    >
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;