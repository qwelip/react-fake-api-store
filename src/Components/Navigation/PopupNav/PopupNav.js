import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PopupNav.css';

const PopupNav = ({links, handleClick, handleTitle}) => {

    const [popupClass, setPopupClass] = useState(["popup-nav__popup"]);
    const [popupBGClass, setPopupBGClass] = useState(["popup-nav__bg"]);

    const closePopup = () => {
        setPopupClass(["popup-nav__popup"]); 
        setPopupBGClass(["popup-nav__bg"]);
    }

    return (
        <button 
        className='popup-nav' 
        onClick={() => {
            setPopupClass([...popupClass, "popup-nav__popup_visible"]); 
            setPopupBGClass([...popupBGClass, "popup-nav__bg_visible"]);
            }}>
            <i className="material-icons popup-nav__icon">menu</i>

            <div 
                className={popupBGClass.join(' ')} 
                onClick={(e) => {
                    e.stopPropagation();
                    closePopup();
                }}
            ></div>
            <div className={popupClass.join(' ')}>
                <ul className='popup-nav__nav-list'>
                    {
                        links.map( (item, index) => {
                            return <li key={index}>
                                <Link 
                                    to="/" 
                                    onClick={ (e) => {
                                        e.stopPropagation();
                                        closePopup();
                                        handleClick(item);
                                    }}
                                >
                                {handleTitle(item)}
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </button>
    );
};

export default PopupNav;