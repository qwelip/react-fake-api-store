import {
    ADD_QUANTITY, 
    ADD_TO_CART, 
    ADD_TO_FAVORITE, 
    CLOSE_DETAIL_POPUP, 
    REMOVE_FROM_CART, 
    REMOVE_FROM_FAVORITE, 
    REMOVE_QUANTITY, 
    SET_DETAIL_POPUP, 
    SET_PRODUCTS, 
    SET_TITLE
} from './Constants';

export const reducer = (state, {type, payload}) => {
    switch(type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case SET_TITLE:
            return {
                ...state,
                title: payload
            }
        case SET_DETAIL_POPUP:
            return {
                ...state,
                dataForDetailPopup: payload,
                isDetailPopupShow: true
            }
        case CLOSE_DETAIL_POPUP:
            return {
                ...state,
                dataForDetailPopup: {},
                isDetailPopupShow: false
            }
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favoriteList: [...state.favoriteList, payload]
            }
        case REMOVE_FROM_FAVORITE: {
            const newItems = state.favoriteList.filter( (item) => {
                return item.id !== payload
            })
            return {
                ...state,
                favoriteList: [...newItems]
            }
        }
        case ADD_TO_CART:
            return {
                ...state,
                cartList: [...state.cartList, payload]
            }
        case REMOVE_FROM_CART: {
            const newItems = state.cartList.filter( (item) => {
                return item.id !== payload
            })
            return {
                ...state,
                cartList: [...newItems]
            }
        }
        case ADD_QUANTITY: {
            const searchIndex = state.cartList.findIndex( item => item.id === payload);
            const newCartList = state.cartList.map( (item, index) => {
                if (index === searchIndex) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    } 
                } else {
                    return item
                }
            })
            return {
                ...state,
                cartList: newCartList
            }
        }
        case REMOVE_QUANTITY:{
            const searchIndex = state.cartList.findIndex( item => item.id === payload);
            const newCartList = state.cartList.map( (item, index) => {
                if (index === searchIndex && item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    } 
                } else {
                    return item
                }
            })
            return {
                ...state,
                cartList: newCartList
            }
        }
        default: 
            return state
    }
}