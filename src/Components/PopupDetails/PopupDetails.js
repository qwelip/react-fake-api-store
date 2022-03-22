import React, { useContext } from 'react';
import { ShopContext } from '../../Context/Context';
import Raiting from '../Raiting/Raiting';
import ActionButtons from '../ActionButtons/ActionButtons';
import './PopupDetails.css';

const PopupDetails = () => {

    const {dataForDetailPopup, closeDetailPopup} = useContext(ShopContext);

    const {id, image, title, description, rating, price} = dataForDetailPopup;

    const closeDetailPopupOnOverlay = (e) => {
        if (e.target.classList.contains('popup-details__fixed-overlay')) {
            closeDetailPopup()
        }
    }

    return (
        <div className='popup-details popup-details__fixed-overlay' onClick={closeDetailPopupOnOverlay}>
            <div className="popup-details__modal">
                <div className="popup-details__content">
                    <i className="material-icons popup-details__close" onClick={closeDetailPopup}>close</i>
                    <div className="popup-details__row popup-details__row_top">
                        <img className="popup-details__img" src={image} alt={title} />
                        <div className="popup-details__details">
                            <h3 className='popup-details__title'>{title}</h3>
                            <div className="popup-details__separator"></div>
                            <p className="popup-details__text">{description}</p>
                        </div>
                    </div>
                    
                    <div className="popup-details__row popup-details__row_bottom">
                        <ActionButtons
                            id={id} 
                            image={image} 
                            title={title} 
                            price={price}
                        />
                        <div className="popup-details__rating">
                            <p className='popup-details__rating-caption'>Customer rating</p>
                            <Raiting rating={rating.rate}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupDetails;