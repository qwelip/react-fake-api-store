import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Favorite from '../../Components/Favorite/Favorite';
import Cart from '../../Components/Cart/Cart';
import { ShopContext } from '../../Context/Context';
import { getSpecificCategory, getAllProduts } from '../../configApi';
import PopupNav from '../../Components/Navigation/PopupNav/PopupNav';
import RegularNav from '../../Components/Navigation/RegularNav/RegularNav';
import './Header.css';

const Header = () => {

    const {setProducts, setTitle} = useContext(ShopContext);
    const [windowWidth, setWindowWidth] = useState('');
    const linksArray = ['electronics', 'jewelery', 'men\'s clothing','women\'s clothing'];

    const getAll = () => {
        setProducts([]);
        getAllProduts.then(res => setProducts(res));
    }

    const getCategory = (category) => {
        setProducts([]);
        getSpecificCategory(category).then(res => setProducts(res));
    }

    const handleClick = (category) => {
        getCategory(category);
        setTitle(handleTitle(category));
    }

    const handleTitle = (str) => {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    }

    const handleResize = (width) => {
        setWindowWidth(width);
    }

    useEffect( () => {
        setWindowWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', handleResize(document.documentElement.clientWidth))

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header className='header' >
            <div className="header__content">
                <Link to="/" className="header__logo nav-link" onClick={ () => {getAll(); setTitle('All Products')}}>React Store</Link>
                {
                    windowWidth >= 950 ?
                    <RegularNav links={linksArray} handleClick={handleClick} handleTitle={handleTitle}/>
                    :
                    null
                }
                <div className='header__add-to'>
                    <Favorite/>
                    <Cart/>
                    {
                        windowWidth < 950 ?
                        <PopupNav links={linksArray} handleClick={handleClick} handleTitle={handleTitle}/>
                        :
                        null
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;