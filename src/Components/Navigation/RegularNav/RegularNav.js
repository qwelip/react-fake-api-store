import React from 'react';
import { Link } from 'react-router-dom';
import './RegularNav.css';

const RegularNav = ({links, handleClick, handleTitle}) => {

    return (
        <nav className='regular-nav'>
            <ul className='regular-nav__list'>
                {
                    links.map( item => {
                        return (
                            <li className='regular-nav__link'>
                                <Link key={Date.now()} to="/" onClick={ () => handleClick(item)}>{handleTitle(item)}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default RegularNav;