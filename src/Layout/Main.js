import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ShopContext } from '../Context/Context';
import { getAllProduts } from '../configApi';
import PopupDetails from '../Components/PopupDetails';
import Content from '../Components/Content';
import CartPage from '../Pages/CartPage';
import NotFoundPage from '../Pages/NotFoundPage';
import './Main.css';

const Main = () => {

    const {setProducts, title, isDetailPopupShow} = useContext(ShopContext);

    useEffect( () => {
        getAllProduts.then( res =>setProducts(res))
    //eslint-disable-next-line
    }, [])

    return (
        <main className='main'>
            {isDetailPopupShow ? <PopupDetails/> : null} 
            <h1 className='main__title'>{title}</h1>
            <div className="main__content">
                <Routes>
                    <Route path="/" element={<Content/>} />
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </main>
    );
};

export default Main;