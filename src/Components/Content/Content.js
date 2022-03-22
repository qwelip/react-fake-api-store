import React, { useContext } from 'react';
import Preloader from '../Preloader/Preloader';
import { ShopContext } from '../../Context/Context';
import Card from '../Card/Card';


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