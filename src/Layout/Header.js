import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Favorite from '../Components/Favorite';
import Cart from '../Components/Cart';
import { ShopContext } from '../Context/Context';
import { getSpecificCategory, getAllProduts } from '../configApi';
import PopupNav from '../Components/Navigation/PopupNav/PopupNav';
import RegularNav from '../Components/Navigation/RegularNav/RegularNav';
// import Search from '../Components/Search';
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

    useEffect( () => {
        setWindowWidth(document.documentElement.clientWidth);
        window.addEventListener('resize', () => {
            setWindowWidth(document.documentElement.clientWidth);
        })
    }, [])

    return (
        <header className='header'>
            <div className="header__content">
                <Link to="/" className="header__logo nav-link" onClick={ () => {getAll(); setTitle('All Products')}}>React Store</Link>
                {
                    windowWidth >= 950 ?
                    <RegularNav links={linksArray} handleClick={handleClick} handleTitle={handleTitle}/>
                    :
                    null
                }
                {/* <Search /> */}
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