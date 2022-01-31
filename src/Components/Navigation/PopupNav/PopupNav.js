import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PopupNav.css';

const PopupNav = ({links, handleClick, handleTitle}) => {


    const [popupClass, setPopupClass] = useState(["popup-nav__popup"]);

    const handlePopupNav = (e) => {
        if (popupClass.length === 1) {
            setPopupClass([...popupClass, "popup-nav__popup_visible"])
        } else {
            setPopupClass(["popup-nav__popup"])
        }
    }

    return (
        <button className='popup-nav' onClick={(e) => handlePopupNav(e)}>
            <i className="material-icons popup-nav__icon">menu</i>

            <div className={popupClass.join(' ')}>
                <ul className='popup-nav__nav-list'>
                    {
                        links.map( item => {
                            return <li>
                                <Link key={item} to="/" onClick={ () => handleClick(item)}>{handleTitle(item)}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </button>
    );
};

export default PopupNav;