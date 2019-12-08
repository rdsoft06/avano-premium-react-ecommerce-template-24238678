import products from '../../api/products'

import {
    CHANGE_CURRENCY,
    RECEIVE_PRODUCTS
} from './actionTypes';

export const changeCurrency = (symbol) => ({
    type: CHANGE_CURRENCY,
    symbol
});

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    dispatch(receiveProducts(products));
    return products;
}