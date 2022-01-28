import React from 'react';
import { useContext } from 'react/cjs/react.development';
import Preloader from './Preloader';
import { ShopContext } from '../Context/Context';
import Card from './Card';


const Content = () => {

    const {products} = useContext(ShopContext);

    return (
        <>
            { products.length === 0 ? <Preloader/> :
                products.map( item => {
                    return <Card key={item.id} {...item}/>
                })
            } 
        </>
    );
};

export default Content;