import React, { createContext, useReducer } from 'react';
import { reducer } from '../Reducer/Reducer';

export const ShopContext = createContext();

const initialState = {
    title: 'All Products',
    products: [],
    isDetailPopupShow: false,
    dataForDetailPopup: {},
    favoriteList: [],
    cartList: []
};

const Context = (props) => {

    const [value, dispatch] = useReducer(reducer, initialState);

    value.setProducts = (data) => {
        dispatch({type: 'SET_PRODUCTS', payload: data});
    }

    value.setTitle = (title) => {
        dispatch({type: 'SET_TITLE', payload: title})
    }

    value.setDetailPopup = (data) => {
        dispatch({type: 'SET_DETAIL_POPUP', payload: data});
    }

    value.closeDetailPopup = () => {
        dispatch({type: 'CLOSE_DETAIL_POPUP'});
    }

    value.addToFavorite = (data) => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: data})
    }

    value.removeFromFavorite = (id) => {
        dispatch({type:'REMOVE_FROM_FAVORITE', payload: id})
    }

    value.addToCart = (data) => {
        dispatch({type: 'ADD_TO_CART', payload: data})
    }

    value.removeFromCart = (id) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: id})
    }

    value.addQuantity = (id) => {
        dispatch({type: 'ADD_QUANTITY', payload: id})
    }

    value.removeQuantity = (id) => {
        dispatch({type: 'REMOVE_QUANTITY', payload: id})
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default Context;