import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Components/Search';
import Favorite from '../Components/Favorite';
import Cart from '../Components/Cart';
import { ShopContext } from '../Context/Context';
import { getSpecificCategory, getAllProduts } from '../configApi';
import './Header.css';

const Header = () => {

    const {setProducts, setTitle} = useContext(ShopContext);

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
        setTitle(category.slice(0, 1).toUpperCase() + category.slice(1));
    }

    return (
        <header className='header'>
            <div className="header__content">
                <Link to="/" className="header__logo nav-link" onClick={ () => {getAll(); setTitle('All Products')}}>React Store</Link>
                <nav className='header__navigation'>
                    <ul className='header__navigation-list'>
                        <li className='header__link nav-link'>
                            <Link to="/" onClick={ () => handleClick('electronics')}>Electronics</Link>
                        </li>
                        <li className='header__link nav-link'>
                            <Link to="/" onClick={ () => handleClick('jewelery')}>Jewelery</Link>
                        </li>
                        <li className='header__link nav-link'>
                            <Link to="/" onClick={ () => handleClick('men\'s clothing')}>Men's clothing</Link>
                        </li>
                        <li className='header__link nav-link'>
                            <Link to="/" onClick={ () => handleClick('women\'s clothing')}>Women's clothing</Link>
                        </li>
                    </ul>
                </nav>
                {/* <Search/> */}
                <div className='header__add-to'>
                    <Favorite/>
                    <Cart/>
                </div>
            </div>
        </header>
    );
};

export default Header;