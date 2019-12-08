import {
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
} from "./actionTypes";

export const addToWishlist = (product, translate) => (dispatch) => {
    toast.success(translate('added_to_wishlist'));
    dispatch(addToWishlistUnsafe(product))
}

export const addToWishlistUnsafe = (product) => ({
    type: ADD_TO_WISHLIST,
    product
});

export const removeFromWishlist = (product) => ({
    type: REMOVE_FROM_WISHLIST,
    product
});