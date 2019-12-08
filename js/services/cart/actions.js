import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY
} from './actionTypes';
import {
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addToCart = (product, qty, translate) => (dispatch) => {
    toast.success(translate('added_to_cart'));
    dispatch(addToCartUnsafe(product, qty))
}

export const addToCartUnsafe = (product, qty) => ({
    type: ADD_TO_CART,
    product,
    qty
});

export const removeFromCart = (product, translate) => (dispatch) => {
    toast.error(translate('removed_from_cart'));
    dispatch({
        type: REMOVE_FROM_CART,
        product
    })
};

export const updateQuantity = (product, quantity, translate) => (dispatch) => {
    toast.success(translate('changed_cart'));
    dispatch({
        type: UPDATE_QUANTITY,
        product,
        quantity
    })
};