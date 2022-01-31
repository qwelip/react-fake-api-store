import React, { useContext } from 'react';
import './PopupDetails.css';
import { ShopContext } from '../Context/Context';
import Raiting from './Raiting';

const PopupDetails = () => {

    const {dataForDetailPopup, closeDetailPopup} = useContext(ShopContext);

    return (
        <section className='popup-details'>
            <div className="popup-details__content">
                <i className="material-icons popup-details__close" onClick={ () => {closeDetailPopup()}}>close</i>
                <img className="popup-details__img" src={dataForDetailPopup.image} alt={dataForDetailPopup.title} />
                <div className="popup-details__details">
                    <h3 className='popup-details__title'>{dataForDetailPopup.title}</h3>
                    <div className="popup-details__separator"></div>
                    <p className="popup-details__text">{dataForDetailPopup.description}</p>
                    <div className="popup-details__separator"></div>
                    <div className="popup-details__rating">
                        <p>Customer rating</p>
                        <Raiting rating={dataForDetailPopup.rating.rate}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopupDetails;